import { data } from './mockData';

const getProductsListHandler = async (event, ctx, cb) => {
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};

export {
    getProductsListHandler
};
