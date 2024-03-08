import express, { Request, Response } from 'express';
const PORT = process.env.PORT || 3301;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello world!');
});

app.listen(PORT, () => console.log(`Run server on port http://localhost:${PORT}`));