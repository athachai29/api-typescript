import express from 'express';

import router from './routes';

const PORT: string | number = process.env.PORT || 3301;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(PORT, () => console.log(`Run server on port http://localhost:${PORT}`));
