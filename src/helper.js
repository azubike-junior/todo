const sendResponse = (res, data, code, message) => {
    return res.status(code).json({
        success: true,
        data,
        message
    })
}

const handleError = (message, statusCode = null, next) => {
    const error = new Error();
    error.message = message;
    error.statusCode = statusCode;
    return next(error)
}

module.exports = {
    sendResponse,
    handleError
};