import { Request, Response } from 'express';

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

            // Check for palindrome;
            const cleanStr = data.value.toLowerCase().replace(/[^a-z0-9]/g, '');
            const isPalindrome = cleanStr === cleanStr.split('').reverse().join('');

            // Return result
            res.status(200).json({
                status: true,
                message: 'Data received successfully',
                data: {
                    isPalindrome: isPalindrome,
                },
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

export default jsController;
