const joi = require('joi');

const createContentTypeSchema = joi.object({
  contentTypeName: joi
    .string()
    .required(),
  Types: joi
    .array()
    .items(joi
      .string()
    ),
  emailId: joi
    .string()
    .required()
});
const updateContentTypeSchema = joi.object({
  contentTypeName: joi

    .string()
    .required(),
  Types: joi

    .array()
    .items(joi
      .string()
    ),
  emailId: joi
    .string()

});

module.exports = {

  createContentTypeSchema,
  updateContentTypeSchema
  
};
