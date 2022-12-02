import ResponsesData from "../db/ResponsesData";

class ResponsesController {
    static submitNewEntry(companyId: string, tweetId: string, action: string, twitterHandle: string) {
        const data = ResponsesData.get();
        data.push({
            companyId,
            tweetId,
            action,
            twitterHandle,
        });

        ResponsesData.save(data);
    }
}

export default ResponsesController;