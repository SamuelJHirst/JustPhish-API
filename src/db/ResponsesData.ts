import fs from 'fs';
import path from 'path';

class ResponsesData {
    static get() {
        const fp = path.join(__dirname, '../..', 'data/responses.json');
        const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));

        return data;
    }

    static save(data: any) {
        const fp = path.join(__dirname, '../..', 'data/responses.json');
        fs.writeFileSync(fp, JSON.stringify(data, null, 4), 'utf-8');

        return data;
    }
}

export default ResponsesData;