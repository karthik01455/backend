const {ContentType} = require('../../database/models');
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
  try{
    const content = await ContentType.findByPk(id);
    return content;
  }
  catch(error){
    return null;
  }
  
}
   
async function updateContentType(id, contentTypeName, Types) {
  try{
    const content = await ContentType.update({
      contentTypeName,
      Types
    }, {
      where: {
        id
      }
    });
    return content;
  }catch(error){
    return null;
  }
  
}
async function deleteContentType(id) {
  try{
    const content = await ContentType.destroy({
      where: {
        id
      }
    });
    return content;
  }
  catch(error){
    return null;
  }
  
}

module.exports = {
  createContentType,getAllContentTypes,getContentById,updateContentType,deleteContentType
};
