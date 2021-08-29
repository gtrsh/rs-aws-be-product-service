import { data } from './mockData';

const getProductsByIdHandler = async (event, ctx, cb) => {
    const { productId } = event.pathParameters;
    const product = data.filter((i) => i.id === productId)[0] ?? null;

    return {
        statusCode: 200,
        body: JSON.stringify(product)
    };
};

export {
    getProductsByIdHandler
};
