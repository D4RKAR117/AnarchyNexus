// Initial imports
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

try {
	dotenv.config(); // Loads env config

	const app = express(); // App Instance
	const port = parseInt(<string>process.env.PORT, 10) || 8000; // default port to listen
	const host = process.env.HOST || 'localhost'; // default host address
	const env = process.env.NODE_ENV || 'production';

	// adding Helmet to enhance API security
	app.use(helmet());

	// using bodyParser to parse JSON bodies into JS objects
	app.use(bodyParser.json());

	// enabling CORS for all requests
	app.use(cors());

	// Using compression strategy to improve request payload
	app.use(compression());

	// using loggin after each request
	const logger: 'tiny' | 'dev' = env === 'production' ? 'tiny' : 'dev';
	app.use(morgan(logger));

	// define a route handler for the default home page
	app.get('/', (req, res) => {
		res.send('Hello world!');
	});

	// start the Express server
	app.listen(port, host, () => {
		console.info(`Nexus server started at http://${host}:${port}`);
		console.info(`Current env is ${env}`);
	});
} catch (error) {
	console.error(error);
}
