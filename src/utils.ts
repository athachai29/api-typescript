import https from 'https';

import { IGithubCallerResponse } from '../types/github';

export const githubCaller = (path: string): Promise<IGithubCallerResponse> => {
    const GITHUB_ENDPOINT: string = 'https://api.github.com';

    const options: object = {
        headers: {
            'User-Agent': 'request'
        }
    };

    const caller: Promise<IGithubCallerResponse> = new Promise((resolve, reject) => {
        https.get(`${GITHUB_ENDPOINT}${path}`, options, (res) => {
            let data: string = '';
            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve({
                    status: 'success',
                    data: JSON.parse(data),
                });
            });

            res.on('error', (err) => {
                reject({
                    status: 'error',
                    data: err,
                });
            });
        });
    });

    return caller;
};

export default {
    githubCaller,
}
