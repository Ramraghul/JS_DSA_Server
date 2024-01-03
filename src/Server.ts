import express, { Request, Response, NextFunction } from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import Route from './Routes/master.route';
import swaggerUi from 'swagger-ui-express';
import { JsSwaggerSpec } from './Doc/Swagger/master.swagger';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import axios from 'axios';
import requestIp from 'request-ip';
require('dotenv').config();

const app = express();

// Advanced Configuration
const advancedConfig = {
    enableCors: true,
    enableCompression: true,
    enableHelmet: true,
    enableLogDetection: true,
    environment: process.env.NODE_ENV || 'development',
};

// Apply environment-specific configuration
if (advancedConfig.environment === 'production') {
    app.set('trust proxy', 1);
}

// Apply advanced configuration
if (advancedConfig.enableCors) {
    // Use a more specific CORS configuration
    const corsOptions = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST',
        credentials: true,
        optionsSuccessStatus: 204,
    };
    app.use(cors(corsOptions));
}

if (advancedConfig.enableCompression) {
    app.use(compression());
}

if (advancedConfig.enableHelmet) {
    app.use(helmet());
}

if (advancedConfig.enableLogDetection) {
    app.use(async (req, res, next) => {
        console.log(
            `[${chalk.blueBright(new Date().toLocaleString())}] ` +
            `${chalk.green(req.method)} ${chalk.cyan(req.url)}`
        );
        next();
    });
}


// Logger Middleware
app.use(logger((tokens, req, res) => {
    const method = chalk.bold(tokens.method(req, res));
    const url = chalk.italic.grey(tokens.url(req, res));
    const status = tokens.status?.(req, res);
    const statusColor =
        typeof status === 'string'
            ? status >= '500' ? chalk.red(status) : status >= '400' ? chalk.yellow(status) : status >= '300' ? chalk.cyan(status) : chalk.green(status)
            : chalk.green(status);
    const responseTime = chalk.hex('#ff6348')(tokens['response-time'](req, res) + ' ms');
    const contentLength = chalk.hex('#2ed573')(tokens.res(req, res, 'content-length'));

    return [method, url, statusColor, responseTime, '-', contentLength].join(' ');
}));

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Check Backend Working Or Not and Welcome Message
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: true,
        message: 'Welcome to JavaScript Data Structures And Algorithms Server',
    });
});

// Mount the router
app.use('/api/v1', Route);

// Swagger Doc
app.use('/api_doc', swaggerUi.serve, swaggerUi.setup(JsSwaggerSpec));

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${chalk.blueBright(`http://localhost:${PORT}`)}`);
    console.log(`Swagger Doc running on ${chalk.yellowBright(`http://localhost:${PORT}/api_doc`)}`);
    console.log(`Press ${chalk.redBright('Ctrl + C')} to Stop this Server`);
});