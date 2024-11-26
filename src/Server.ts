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
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const Token  = 'Testing Token'

// Advanced Configuration
const advancedConfig = {
    enableCors: true,
    enableCompression: true,
    enableHelmet: true,
    enableLogDetection: true,
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000
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
    app.use((req, res, next) => {
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
    const statusColor = (typeof status === 'string')
        ? (status >= '500' ? chalk.red(status) : status >= '400' ? chalk.yellow(status) : status >= '300' ? chalk.cyan(status) : chalk.green(status))
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

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Check Backend Working Or Not and Welcome Message And Bearer Token For API
app.get("/welcome", (req: Request, res: Response) => {
    res.status(200).json({
        status: true,
        message: 'Welcome to JavaScript Data Structures And Algorithms Server',
        data:{
            bearer_token:`${Token}`
        }
    });
});

// Mount the router
app.use('/api/v1', Route);

//Swagger Css Direct Access
app.use('/swagger-ui-assets', express.static(path.join(__dirname, '../node_modules/swagger-ui-dist')));

// Swagger Doc
app.use(
    '/',
    swaggerUi.serveFiles(JsSwaggerSpec),
    swaggerUi.setup(JsSwaggerSpec, { explorer: true, swaggerOptions: { url: '/swagger-ui-assets/swagger.json' } })
);


// Start the server
app.listen(advancedConfig.port, () => {
    console.log(`Server is running on ${chalk.blueBright(`http://localhost:${advancedConfig.port}`)}`);
    console.log(`Swagger Doc running on ${chalk.yellowBright(`http://localhost:${advancedConfig.port}`)}`);
    console.log(`Your API Token Is ${chalk.magentaBright(Token)}`);
    console.log(`Press ${chalk.redBright('Ctrl + C')} to Stop this Server`);
});
