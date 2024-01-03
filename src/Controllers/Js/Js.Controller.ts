// Required Package Import
import { Request, Response } from 'express';
import { numeral } from '../../config/Js/common.config';


//Main Js Controller;
const jsController = {

    //Palindrome Check Controller;
    async palindrome(req: Request, res: Response) {
        try {
            const data: { value?: string } = req.body;

            // Check if data is missing or value is not provided
            if (!data || !data.value) {
                return res.status(400).json({
                    status: false,
                    message: 'Bad Request || Provide a valid value in the request body',
                });
            }

            // Measure the start time
            const startTime: [number, number] = process.hrtime();

            // Check for palindrome;
            const cleanStr: string = data.value.toLowerCase().replace(/[^a-z0-9]/g, '');
            const isPalindrome: Boolean = cleanStr === cleanStr.split('').reverse().join('');

            // Measure the end time
            const endTime: [number, number] = process.hrtime(startTime);

            // Calculate the time difference in milliseconds
            const solvedTime: string = (endTime[0] * 1000 + endTime[1] / 1e6).toFixed(4);

            // Return result with solved time
            res.status(200).json({
                status: true,
                message: 'Data received successfully',
                data: {
                    input: data.value,
                    isPalindrome: isPalindrome,
                    solvedTime: `${solvedTime} ms`,
                },
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    //Number To Roman Numeral Converter;
    async romanNumeral(req: Request, res: Response) {
        try {
            const data: { value?: number } = req.body;
            let inputValue: number | undefined = data.value;

            // Check if data is missing or value is not provided
            if (!data || !data.value) {
                return res.status(400).json({
                    status: false,
                    message: 'Bad Request || Provide a valid value in the request body',
                });
            }

            // Measure the start time
            const startTime: [number, number] = process.hrtime();

            //Number To Convert Roman Numeral;
            let result: string = '';
            let numKeys: string[] = Object.keys(numeral).reverse();

            for (let i of numKeys) {
                const numericKey: number = parseInt(i);

                while (data.value >= numericKey) {
                    result += numeral[numericKey];
                    data.value -= numericKey;
                }
            }

            // Measure the end time
            const endTime: [number, number] = process.hrtime(startTime);

            // Calculate the time difference in milliseconds
            const solvedTime: string = (endTime[0] * 1000 + endTime[1] / 1e6).toFixed(4);

            // Return result
            res.status(200).json({
                status: true,
                message: 'Data received successfully',
                data: {
                    input: inputValue,
                    romanNumeral: result,
                    solvedTime: `${solvedTime} ms`,

                },
            });

        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    //Caesar Cipher Encryption and Decryption;
    async caesarCipher(req: Request, res: Response) {
        try {
            const data: { value?: number | string, type?: string } = req.body;
            const inputValue: string | number | undefined = data.value;

            // Check if data is missing or value is not provided
            if (!data || !data.value || !data.type) {
                return res.status(400).json({
                    status: false,
                    message: 'Bad Request || Provide a valid value or Type in the request body',
                });
            }

            // Measure the start time
            const startTime: [number, number] = process.hrtime();

            //Caesar Cipher Encryption and Decryption for String
            if (typeof (data.value) === 'string' && data.type === 'encrypt') {

            }
            else if (typeof (data.value) === 'string' && data.type === 'decrypt') {

            }
            //Caesar Cipher Encryption and Decryption for number
            if (typeof (data.value) === 'number' && data.type === 'encrypt') {

            }
            else if (typeof (data.value) === 'number' && data.type === 'decrypt') {

            }

            // Measure the end time
            const endTime: [number, number] = process.hrtime(startTime);

            // Calculate the time difference in milliseconds
            const solvedTime: string = (endTime[0] * 1000 + endTime[1] / 1e6).toFixed(4);

            // Return result
            res.status(200).json({
                status: true,
                message: 'Data received successfully',
                data: {
                    input: inputValue,
                    // romanNumeral: result,
                    solvedTime: `${solvedTime} ms`,

                },
            });

        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};


export default jsController;
