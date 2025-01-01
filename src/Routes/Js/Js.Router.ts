// Required Package Import
import express from "express";
const route = express.Router();
import { JsController } from "../../Controllers/index.controller";

// Check The Given String Palindrome Or Not
route.post('/palindrome', JsController.palindrome);

//Number To Roman Numeral Converter;
route.post('/romanNumeral', JsController.romanNumeral);

//Caesar Cipher Encryption and Decryption;
route.post('/caesarCipher', JsController.caesarCipher);

//Find The Second Largest Number In Array
route.post('/secondLargest', JsController.secondLargest);
export default route;
