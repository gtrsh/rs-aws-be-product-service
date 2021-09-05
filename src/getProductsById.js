import { data } from './mockData';

const getProductsByIdHandler = async (event, ctx, cb) => {
    const { productId } = event.pathParameters;
    const product = data.filter((i) => i.id === productId)[0] ?? null;

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    };
};

export {
    getProductsByIdHandler
};
