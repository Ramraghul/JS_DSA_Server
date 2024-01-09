// Required Package Import
import { Request, Response } from 'express';
import { numeral, alphabet } from '../../config/Js/common.config';


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
            const data: { value?: number | string, type?: string, shift?: number | undefined } = req.body;
            const inputValue: string | number | undefined = data.value;

            // Check if data is missing or value is not provided
            if (!data || data.value === undefined || data.type === undefined || data.shift === undefined) {
                const missingValue = !data.value ? 'value' : !data.type ? 'type' : 'shift';
                return res.status(400).json({
                    status: false,
                    message: `Bad Request Need To Provide a valid ${missingValue} in the request body`,
                });
            }

            // Measure the start time
            const startTime: [number, number] = process.hrtime();

            //Get Object Key Values From Alphabet
            let alphabetKey: string = Object.keys(alphabet).join('');

            //Initial Values
            let encrypt: string = '';

            let decrypt: string = '';

            // Caesar Cipher Encryption and Decryption for string
            if (typeof data.value === 'string') {
                for (let i = 0; i < data.value.length; i++) {
                    const char = data.value[i];
                    if (data.type === 'encrypt') {
                        // Encryption logic for string
                        const charIndex = alphabetKey.indexOf(char);
                        const encryptedIndex = (charIndex + (data.shift ?? 13)) % alphabetKey.length;
                        const encryptedChar = alphabetKey[encryptedIndex];
                        encrypt += char === ' ' ? ' ' : encryptedChar;
                    } else if (data.type === 'decrypt') {
                        // Decryption logic for string
                        const charIndex = alphabetKey.indexOf(char);
                        const decryptedIndex = (charIndex - (data.shift ?? 13) + alphabetKey.length) % alphabetKey.length;
                        const decryptedChar = alphabetKey[decryptedIndex];
                        decrypt += char === ' ' ? ' ' : decryptedChar;
                    }
                }
            }

            // Caesar Cipher Encryption and Decryption for number
            else if (typeof data.value === 'number') {
                if (data.type === 'encrypt') {

                } else if (data.type === 'decrypt') {

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
                    [`caesar_cipher_${data.type}`]: data.type === 'encrypt' ? encrypt : decrypt,
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
