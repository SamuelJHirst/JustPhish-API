import fs from 'fs';
import path from 'path';

class LeaderboardData {
    static get() {
        const fp = path.join(__dirname, '../..', 'data/leaderboard.json');
        const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));

        return data;
    }

    static save(data: any) {
        const fp = path.join(__dirname, '../..', 'data/leaderboard.json');
        fs.writeFileSync(fp, JSON.stringify(data, null, 4), 'utf-8');

        return data;
    }
}

export default LeaderboardData;