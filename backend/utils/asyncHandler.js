// This wrapper catches any rejected promise or thrown error and 
// forwards it straight to the global error middleware we added to server.js
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;