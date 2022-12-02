import { Request, Response, Router } from 'express';

import QuestionController from '../controllers/QuestionController';

const router = Router();

router.get('/getQuestion', (req: Request, res: Response) => {
    const companySummary = QuestionController.getSummaryOfAllCompanies();

    const companyIds = [];
    for (const companyId of Object.keys(companySummary)) {
        for (let i = 0; i < companySummary[companyId].real_tweets.length; i++) {
            companyIds.push(companyId);
        }
    }

    const randomCompanyIndex = Math.floor(Math.random() * companyIds.length);
    const selectedCompanyId = companyIds[randomCompanyIndex];
    const selectedCompanySummary = companySummary[selectedCompanyId];
    const selectedCompany = QuestionController.getCompanyById(selectedCompanyId);

    const randomRealTweetIndex = Math.floor(Math.random() * selectedCompanySummary.real_tweets.length);
    const selectedRealTweetId = selectedCompanySummary.real_tweets[randomRealTweetIndex];
    const selectedRealTweet = QuestionController.getRealTweetById(selectedCompanyId, selectedRealTweetId);

    const randomFakeTweetIndex = Math.floor(Math.random() * selectedCompanySummary.fake_tweets.length);
    const selectedFakeTweetId = selectedCompanySummary.fake_tweets[randomFakeTweetIndex];
    const selectedFakeTweet = QuestionController.getFakeTweetById(selectedCompanyId, selectedFakeTweetId);

    return res.send({
        ...selectedCompany,
        tweets: Math.random() > 0.5 ? [
            selectedRealTweet, selectedFakeTweet
        ] : [
            selectedFakeTweet, selectedRealTweet
        ],
        real_tweets: undefined,
        fake_tweets: undefined,
    });
});

router.post('/submitResponse', (req: Request, res: Response) => {
    const companyId = req.body.company_id;
    const tweetId = req.body.tweet_id;

    const result = QuestionController.getRealTweetById(companyId, tweetId);
    if (!result) {
        return res.send({ answer: false });
    }
    return res.send({ answer: true });
});

export default router;