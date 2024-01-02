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
                url: process.env.LIVE_URL,
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

export const swaggerSpec = swaggerJsdoc(option);

module.exports = {
    swaggerSpec
};