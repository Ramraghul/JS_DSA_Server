// Required Package Import;
import swaggerJsdoc from 'swagger-jsdoc';
require('dotenv').config();
const BaseUrlVersion = "api/v1";

const option = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'JavaScript Data Structures And Algorithms',
            description: 'This is JavaScript Data Structures And Algorithms For Learning ',
            version: '1.0.0',
            termsOfService: 'https://github.com/Ramraghul/JS_DSA_Server',
            contact: {
                name: 'Raghul',
                url: 'https://raghul-test.netlify.app',
                email: 'raghulraghul111@gmail.com',
            },
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`,
                description: 'Development Server'
            },
            {
                url: 'https://js-dsa-server.vercel.app',
                description: 'Production Server'
            }
        ],
        security: [
            {
                'ApiKeyAuth': []
            }
        ],
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization'
                }
            }
        },
        paths: {
            [`/${BaseUrlVersion}`]: {
                get: {
                    tags: ['Route Test'],
                    summary: 'Check if the GET method is working',
                    description: 'This API is used to check if the GET method is working or not',
                    responses: {
                        '200': {
                            description: 'This JavaScript Data Structures And Algorithms API is successfully working',
                            content: {
                                'application/json': {
                                    example: {
                                        status: 'true',
                                        message: 'Welcome to the API version 1!'
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        status: 'false',
                                        message: 'Internal Server Error'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            [`/${BaseUrlVersion}/js/palindrome`]: {
                post: {
                    tags: ['JS_DSA'],
                    summary: 'palindrome Checker',
                    description: 'This API is Used To Check Given Word Or String isPalindrome Or Not. Palindrome Means Start to Last or Last to Front Letter and Words are pronounce Same Meaning',
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        value: {
                                            type: 'string',
                                            example: 'eye',
                                            description: 'This Is The Palindrome'
                                        }
                                    },
                                    required: ['value']
                                },
                                example: {
                                    value: 'eye',
                                }
                            }
                        }
                    },
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            status: {
                                                type: 'boolean',
                                                example: true,
                                                description: 'Successfully Api Worked Or Not'
                                            },
                                            message: {
                                                type: 'string',
                                                example: 'Data received successfully',
                                                description: 'API success message'
                                            },
                                            data: {
                                                type: 'object',
                                                properties: {
                                                    input: {
                                                        type: 'string',
                                                        example: 'eye',
                                                        description: 'The input data'
                                                    },
                                                    isPalindrome: {
                                                        type: 'boolean',
                                                        example: true,
                                                        description: 'Whether the input is a palindrome or not'
                                                    },
                                                    solvedTime: {
                                                        type: 'string',
                                                        example: '0.0401 ms',
                                                        description: 'Time taken to solve the task'
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        status: true,
                                        message: 'Data received successfully',
                                        data: {
                                            input: 'eye',
                                            isPalindrome: true,
                                            solvedTime: '0.0401 ms'
                                        }
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        status: 'false',
                                        message: 'Internal Server Error'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            [`/${BaseUrlVersion}/js/romanNumeral`]: {
                post: {
                    tags: ['JS_DSA'],
                    summary: 'Number To Roman Numeral Converter',
                    description: 'This API is Used To Convert Number To Roman Numeral',
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        value: {
                                            type: 'number',
                                            example: 3999,
                                            description: 'Number To Palindrome'
                                        }
                                    },
                                    required: ['value']
                                },
                                example: {
                                    value: 3999,
                                }
                            }
                        }
                    },
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            status: {
                                                type: 'boolean',
                                                example: true,
                                                description: 'Successfully Api Worked Or Not'
                                            },
                                            message: {
                                                type: 'string',
                                                example: 'Data received successfully',
                                                description: 'API success message'
                                            },
                                            data: {
                                                type: 'object',
                                                properties: {
                                                    input: {
                                                        type: 'number',
                                                        example: 3999,
                                                        description: 'The input data'
                                                    },
                                                    romanNumeral: {
                                                        type: 'string',
                                                        example: 'MMMCMXCIX',
                                                        description: 'Number To Convert Roman Numeral'
                                                    },
                                                    solvedTime: {
                                                        type: 'string',
                                                        example: '0.0250 ms',
                                                        description: 'Time taken to solve the task'
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        status: true,
                                        message: 'Data received successfully',
                                        data: {
                                            input: 3999,
                                            romanNumeral: 'MMMCMXCIX',
                                            solvedTime: '0.0401 ms'
                                        }
                                    }
                                }
                            }
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        status: 'false',
                                        message: 'Internal Server Error'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            [`/${BaseUrlVersion}/js/caesarCipher`]: {
                post: {
                    tags: ['JS_DSA'],
                    summary: 'Caesar Cipher Encryption/Decryption',
                    description: 'This API performs Caesar Cipher encryption or decryption on strings or numbers based on the input type and shift value.',
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        value: {
                                            type: ['string', 'number'],
                                            example: 'HELLO',
                                            description: 'Input value to encrypt or decrypt. Can be a string or a number.',
                                        },
                                        type: {
                                            type: 'string',
                                            enum: ['encrypt', 'decrypt'],
                                            example: 'encrypt',
                                            description: 'Specify whether to encrypt or decrypt the input.',
                                        },
                                        shift: {
                                            type: 'number',
                                            example: 3,
                                            description: 'The shift value used for the Caesar Cipher. Defaults to 13 if not provided.',
                                        },
                                    },
                                    required: ['value', 'type', 'shift'],
                                },
                                examples: {
                                    encryption_string: {
                                        summary: 'Encryption Example with String',
                                        value: {
                                            value: 'HELLO',
                                            type: 'encrypt',
                                            shift: 3,
                                        },
                                    },
                                    decryption_string: {
                                        summary: 'Decryption Example with String',
                                        value: {
                                            value: 'KHOOR',
                                            type: 'decrypt',
                                            shift: 3,
                                        },
                                    },
                                    encryption_number: {
                                        summary: 'Encryption Example with Number',
                                        value: {
                                            value: 1234,
                                            type: 'encrypt',
                                            shift: 2,
                                        },
                                    },
                                    decryption_number: {
                                        summary: 'Decryption Example with Number',
                                        value: {
                                            value: 5678,
                                            type: 'decrypt',
                                            shift: 2,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            status: {
                                                type: 'boolean',
                                                example: true,
                                                description: 'Indicates if the API operation was successful.',
                                            },
                                            message: {
                                                type: 'string',
                                                example: 'Data received successfully',
                                                description: 'Success message from the API.',
                                            },
                                            data: {
                                                type: 'object',
                                                properties: {
                                                    input: {
                                                        type: ['string', 'number'],
                                                        example: 'HELLO',
                                                        description: 'The original input value.',
                                                    },
                                                    caesar_cipher_encrypt: {
                                                        type: 'string',
                                                        example: 'KHOOR',
                                                        description: 'Result of the Caesar Cipher encryption (if type is "encrypt").',
                                                    },
                                                    caesar_cipher_decrypt: {
                                                        type: 'string',
                                                        example: 'HELLO',
                                                        description: 'Result of the Caesar Cipher decryption (if type is "decrypt").',
                                                    },
                                                    solvedTime: {
                                                        type: 'string',
                                                        example: '0.0450 ms',
                                                        description: 'Time taken to process the operation.',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    examples: {
                                        encrypt_response: {
                                            summary: 'Encrypt Response Example',
                                            value: {
                                                status: true,
                                                message: 'Data received successfully',
                                                data: {
                                                    input: 'HELLO',
                                                    caesar_cipher_encrypt: 'KHOOR',
                                                    solvedTime: '0.0450 ms',
                                                },
                                            },
                                        },
                                        decrypt_response: {
                                            summary: 'Decrypt Response Example',
                                            value: {
                                                status: true,
                                                message: 'Data received successfully',
                                                data: {
                                                    input: 'KHOOR',
                                                    caesar_cipher_decrypt: 'HELLO',
                                                    solvedTime: '0.0350 ms',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        '400': {
                            description: 'Bad Request',
                            content: {
                                'application/json': {
                                    example: {
                                        status: false,
                                        message: 'Bad Request Need To Provide a valid value in the request body',
                                    },
                                },
                            },
                        },
                        '500': {
                            description: 'Server Side Issue',
                            content: {
                                'application/json': {
                                    example: {
                                        status: false,
                                        message: 'Internal Server Error',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        tags: [
            {
                name: 'Route Test',
                description: 'Testing For Route Working or not'
            },
            {
                name: 'JS_DSA',
                description: 'JavaScript Data Structures And Algorithms'
            },
        ]
    },
    apis: [
        '../../../Routes/master.route'
    ]
};

export const JsSwagger = swaggerJsdoc(option);

export default JsSwagger;