// we need json object based  message
const notFound = (req, res, next) => { 
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);// not found
    // next parameter: express know how to deal with=afterDone
    next(error); // read next peace of middleware
};// notFound
// if function takes as four parameters , express knows
// that it is error Handler middleware.
const errorHandler = (err, req, res, next) => {
// 500=unexpected condition that prevented server from fulfeeling the request
// status 200 had hardwriten before and must be changed
    let statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    // initialization of message
    let message = err.message;
// catching Mongoose's error of type "castError" when ID  not exists
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = 'Resource not found';
    }
    res.status(statusCode).json({
        message, //:message
        // err.stack => line number in file
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}; // errorHandler

export { notFound, errorHandler };