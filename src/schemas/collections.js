const joi = require('joi');

const createCollection = joi.object({
  contentId: joi
    .number()
    .required(),
  content: joi
    .object()

});
const updateCollection = joi.object({
  contentId: joi
    .number()
    .required(),
  content: joi
    .object()
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
const getCollectionByContentIdParamSchema = joi.object({
  contentId: joi
    .number()
    .required()
});
module.exports = {
  deleteParamsSchema,
  getParamsSchema,
  createCollection,
  updateCollection,
  getCollectionByContentIdParamSchema
};
