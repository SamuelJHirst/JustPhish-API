import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import gameplayRouter from './routes/gameplay';
import leaderboardRouter from './routes/leaderboard';
import responsesRouter from './routes/responses';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', gameplayRouter);
app.use('/leaderboard', leaderboardRouter);
app.use('/responses', responsesRouter);

const PORT = process.env.API_PORT ?? 8080;
app.listen(PORT, () => {
    console.log(`API Listening on Port ${PORT}`);
});