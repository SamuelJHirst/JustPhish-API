import fs from 'fs';
import path from 'path';

class QuestionData {
    static get() {
        const fp = path.join(__dirname, '../..', 'data/data.json');
        const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));

        return data;
    }
}

export default QuestionData;