/* eslint-disable camelcase */
/* eslint-disable no-tabs */
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import products_routes from './handlers/products';
import users_routes from './handlers/users';
import orders_routes from './handlers/orders';

const app = express();
const port = 3000;

const corsOptions = {
	origin: 'http://someotherdomain.com',
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
	res.send('Hi, MEK');
});
products_routes(app);
users_routes(app);
orders_routes(app);

app.listen(port, () => {
	console.log(`Server is working at http://localhost:${port}`);
});

export default app;
