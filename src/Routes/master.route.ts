// Required Package Import
import express, { Request, Response } from "express";
const route = express.Router();
import jsRoute from '../Routes/Js/Js.Router';


// API Version Checking API
route.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the API version 1!");
});



//JavaScript Route;
route.use('/js', jsRoute);


// User Route
export default route;
