import LeaderboardData from "../db/LeaderboardData";

class LeaderboardController {
    static fetchAllEntries() {
        return LeaderboardData.get();
    }

    static submitNewEntry(twitterHandle: string, level: number, score: number) {
        const data = LeaderboardData.get();
        data.push({
            twitter_handle: twitterHandle,
            level,
            score,
        });

        data.sort((a: any, b: any) => { return a.score > b.score ? -1 : 1 });

        LeaderboardData.save(data.slice(0, 5));
    }
}

export default LeaderboardController;