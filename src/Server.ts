// Required Package Import
import express, { Request, Response } from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import Route from './Routes/master.route';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './Doc/Swagger/Js/Js.swagger';
require('dotenv').config();

const app = express();

// Middleware
app.use(logger((tokens, req, res) => {
    // Use chalk to add color to the log output
    const method = chalk.bold(tokens.method(req, res));
    const url = chalk.italic.grey(tokens.url(req, res));

    // Use optional chaining to safely access status
    const status = tokens.status?.(req, res);

    // Use explicit conversion to number and compare
    const statusColor =
        typeof status === 'string'
            ? status >= '500' ? chalk.red(status) : status >= '400' ? chalk.yellow(status) : status >= '300' ? chalk.cyan(status) : chalk.green(status)
            : chalk.green(status);

    const responseTime = chalk.hex('#ff6348')(tokens['response-time'](req, res) + ' ms');
    const contentLength = chalk.hex('#2ed573')(tokens.res(req, res, 'content-length'));

    return [method, url, statusColor, responseTime, '-', contentLength].join(' ');
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Check Backend Working Or Not and Welcome Message;
app.get("/", (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            status: true,
            message: 'Welcome to JavaScript Data Structures And Algorithms Server'
        });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Corrected mounting of the router
app.use('/api/v1', Route);

//Swagger Doc;
app.use('/api_doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${chalk.blueBright(`http://localhost:${PORT}`)}`);
    console.log(`Swagger Doc running on ${chalk.yellowBright(`http://localhost:${PORT}/api_doc`)}`);
    console.log(`Press ${chalk.redBright('Ctrl + C')} to Stop this Server`);
});