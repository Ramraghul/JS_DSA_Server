// Required Package Import
import express from "express";
const route = express.Router();
import { JsController } from "../../Controllers/index.controller";

// Check The Given String Palindrome Or Not
route.post('/palindrome', JsController.palindrome);

export default route;
