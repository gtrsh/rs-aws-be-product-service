import { data } from './mockData';

const getProductsListHandler = async (event, ctx, cb) => {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
};

export {
    getProductsListHandler
};
