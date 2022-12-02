import { Request, Response, Router } from 'express';

import LeaderboardController from '../controllers/LeaderboardController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.send({
        leaderboard: LeaderboardController.fetchAllEntries(),
    });
});

router.post('/submit_entry', (req: Request, res: Response) => {
    const twitterHandle = req.body.twitter_handle;
    const level = req.body.level;
    const score = req.body.score;

    LeaderboardController.submitNewEntry(twitterHandle, level, score);

    return res.sendStatus(200);
});

export default router;