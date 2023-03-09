const {Collections}= require('../../database/models');
async function createCollection(contentId, content) {
//   console.log('service',contentId, content);
  const collection = await Collections.create({
    contentId,
    content
  });
  return collection;
}
async function getCollectionByContentId(contentId) {
  try{
    const collection = await Collections.findAll({
      where: {
        contentId
      }
    });
    return collection;
  }
  catch(error){
    return null;
  }
}
async function getCollectionById(id) {
  try{
    const collection = await Collections.findByPk(id);
    return collection;
  }
  catch(error){
    return null;
  }
}
module.exports = {
  createCollection,getCollectionByContentId,getCollectionById
};
