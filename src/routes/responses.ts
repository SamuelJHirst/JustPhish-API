import { Request, Response, Router } from 'express';

import ResponsesController from '../controllers/ResponsesController';

const router = Router();

router.post('/', (req: Request, res: Response) => {
    const responses = req.body.response;

    for (const response of responses) {
        ResponsesController.submitNewEntry(
            response.company_id,
            response.tweet_id,
            response.action,
            response.twitterHandle,
        );
    }

    return res.sendStatus(200);
});

export default router;