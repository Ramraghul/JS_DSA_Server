// Required Package Import
import express, { Request, Response } from "express";
const route = express.Router();
import jsRoute from '../Routes/Js/Js.Router';


// API Version Checking API
route.get("/", (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            status:true,
            message:'Welcome to the API version 1!'
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



//JavaScript Route;
route.use('/js', jsRoute);


// User Route
export default route;
