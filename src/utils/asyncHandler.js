export const asyncHandler = (asyncFunc) => (req, res, next) => {
  Promise.resolve(asyncFunc(req, res, next)).catch(next);
};
