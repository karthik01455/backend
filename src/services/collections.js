const {Collections}= require('../../database/models');
const {HTTPError} = require('../utils/errors');
async function createCollection(contentId, content) {
  const collection = await Collections.create({
    contentId,
    content
  });
  return collection;
}
async function getCollectionByContentId(contentId) {
  
  const collection = await Collections.findAll({
    where: {
      contentId
    }
  });
  if(!collection){
    throw new HTTPError('Collection not found', 404);
  }
  return collection;
  
}
 

async function getCollectionById(id) {
  
  const collection = await Collections.findByPk(id);
  if(!collection){
    throw new HTTPError('Collection not found', 404);
  }
  return collection;
  
  
}
//function to update collection and return the updated collection and if not found return null
async function updateCollection(id, contentId, content) {
  
  const collection = await Collections.update({
    contentId,
    content
  }, {
    where: {
      id
    }
  });
  if(!collection){
    throw new HTTPError('Collection not found', 404);
  }
  return collection;
}
  

async function deleteCollection(id) {
  const collection = await Collections.destroy({
    where: {
      id
    }
  });
  if(!collection){
    throw new HTTPError('Collection not found', 404);
  }
  return collection;
}
  


module.exports = {
  createCollection,getCollectionByContentId,getCollectionById,updateCollection,deleteCollection
};
