// function to validate request on defined joi schema
function generateValidationMiddleware(joiSchema, reqAttributeToValidate = 'body') {
  return (req, res, next) => {
    const { error } = joiSchema.validate(req[reqAttributeToValidate]);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
}
module.exports = {
  generateValidationMiddleware
};