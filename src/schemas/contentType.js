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
const deleteParamsSchema = joi.object({
  id: joi
    .number()
    .required()
});
const getParamsSchema = joi.object({
  id: joi
    .number()
    .required()
});

module.exports = {
  deleteParamsSchema,
  getParamsSchema,
  createContentTypeSchema,
  updateContentTypeSchema
  
};
