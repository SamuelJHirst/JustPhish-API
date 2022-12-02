import QuestionData from "../db/QuestionData";

class QuestionController {
    static getSummaryOfAllCompanies() {
        const questionData = QuestionData.get();

        return Object.fromEntries(questionData.map((x: any) => [
            x.id,
            {
                real_tweets: x.real_tweets.map((y: any) => y.id),
                fake_tweets: x.fake_tweets.map((y: any) => y.id),
            },
        ]));
    }

    static getCompanyById(companyId: string) {
        const questionData = QuestionData.get();

        const companyQuery = questionData.filter((x: any) => x.id === companyId);
        if (companyQuery.length === 0) {
            return null;
        }
        return companyQuery[0];
    }

    static getRealTweetById(companyId: string, tweetId: string) {
        const questionData = QuestionData.get();

        const companyQuery = questionData.filter((x: any) => x.id === companyId);
        if (companyQuery.length === 0) {
            return null;
        }
        const company = companyQuery[0];

        const tweetQuery = company.real_tweets.filter((x: any) => x.id === tweetId);
        if (tweetQuery.length === 0) {
            return null;
        }
        return tweetQuery[0];
    }

    static getFakeTweetById(companyId: string, tweetId: string) {
        const questionData = QuestionData.get();

        const companyQuery = questionData.filter((x: any) => x.id === companyId);
        if (companyQuery.length === 0) {
            return null;
        }
        const company = companyQuery[0];

        const tweetQuery = company.fake_tweets.filter((x: any) => x.id === tweetId);
        if (tweetQuery.length === 0) {
            return null;
        }
        return tweetQuery[0];
    }
}

export default QuestionController;