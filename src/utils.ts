import https from 'https';

import { IUserResponse, IReposResponse } from '../types/github';

export const githubCaller = (path: string): Promise<IUserResponse | IReposResponse> => {
    const GITHUB_ENDPOINT: string = 'https://api.github.com';

    const options: object = {
        headers: {
            'User-Agent': 'request'
        }
    };

    const caller: Promise<IUserResponse | IReposResponse> = new Promise((resolve, reject) => {
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
