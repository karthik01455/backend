const collectionsService = require('../services/collections');
async function createCollection(req, res) {
  try {
    const { contentId,content } = req.body;
    const collection = await collectionsService.createCollection( contentId, content);
    res.status(200).send(collection);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
async function getCollectionByContentId(req, res) {
  try {
    const { contentId } = req.params;
    const collection = await collectionsService.getCollectionByContentId(contentId);
       
    if(collection === null ) {
      res.status(404).json({ message: 'Collection not found' });
    }else
      res.status(200).send(collection);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
async function getCollectionById(req, res) {
  try {
    const { id } = req.params;
    const collection = await collectionsService.getCollectionById(id);
    if(collection === null ) {
      res.status(404).json({ message: 'Collection not found' });
    }else
      res.status(200).send(collection);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
async function updateCollection(req, res) {
  try {
    const { id } = req.params;
    const { contentId,content } = req.body;
    const collection = await collectionsService.updateCollection(id, contentId, content);
    if(collection === null ) {
      res.status(404).json({ message: 'Collection not found' });
    }
    else
      res.status(200).send(collection);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function deleteCollection(req, res) {
  try {
    const { id } = req.params;
    const collection = await collectionsService.deleteCollection(id);
    if(collection === null ) {
      res.status(404).json({ message: 'Collection not found' });
    }else
      res.status(200).json({ message: 'Collection deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {
  createCollection,
  getCollectionByContentId,
  getCollectionById,
  updateCollection,
  deleteCollection
};