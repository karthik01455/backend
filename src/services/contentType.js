const {ContentType} = require('../../database/models');
const {HTTPErrors} = require('../utils/errors');

async function createContentType(contentTypeName, Types, emailId) {
  const contentType = await ContentType.create({
    contentTypeName,
    Types,
    emailId
  });
  
  return contentType;
}
async function getAllContentTypes(emailId) {
  const contentTypes = await ContentType.findAll(
    {
      where: {
        emailId
      }
    }

  );
  return contentTypes;
}
async function getContentById(id) {
  
  const content = await ContentType.findByPk(id);
  if(!content){
    throw new HTTPErrors('Content not found', 404);
  }
  return content;
  

  
  
}
async function updateContentType(id, contentTypeName, Types) {
  
  const content = await ContentType.update({
    contentTypeName,
    Types
  }, {
    where: {
      id
    }
  });
  if(!content){
    throw new HTTPErrors('Content not found', 404);
  }
  return content;
  
  
}
async function deleteContentType(id) {
  
  const content = await ContentType.destroy({
    where: {
      id
    }
  });
  if(!content){
    throw new HTTPErrors('Content not found', 404);
  }
  return content;
 
}

module.exports = {
  createContentType,getAllContentTypes,getContentById,updateContentType,deleteContentType
};
