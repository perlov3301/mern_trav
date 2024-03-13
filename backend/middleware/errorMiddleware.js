const notFound = (req, res, next) => { 
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    // next parameter: express know how to deal with=afterDone
    next(error);
};
// if function takes as first parameter 'error' express 
// now that it is error Handler middleware.
const errorHandler = (err, req, res, next) => {
// 500 = unexpected condition that prevented server from
// fulfilling the request
    let statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    let message = err.message;
// interpretation of Mongoose's error
    if (err.name === 'CastError' && err.kind === 'ObjectId') {}
};