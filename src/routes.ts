import { Router, Request, Response } from 'express';

import { githubCaller } from './utils';

const router: Router = Router();

router.get('/', (res: Response) => {
    return res.send('Hello world!');
});

router.get('/user/:username', async (req: Request, res: Response) => {
    const username: string = req.params.username;

    const user: object = await githubCaller(`/users/${username}`);

    return res.json(user);
});

router.get('/user/:username/repos', async (req: Request, res: Response) => {
    const username: string = req.params.username;

    const repos: object = await githubCaller(`/users/${username}/repos`);

    return res.json(repos);
});

export default router;
