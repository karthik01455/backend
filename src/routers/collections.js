const collectionRouter = require('express').Router();
const collectionController = require('../controllers/collections');
collectionRouter.post('/', collectionController.createCollection);
collectionRouter.get('/contentId/:contentId', collectionController.getCollectionByContentId);
collectionRouter.get('/:id', collectionController.getCollectionById);
// collectionRouter.put('/:id', collectionController.updateCollection);
// collectionRouter.delete('/:id', collectionController.deleteCollection);
module.exports = collectionRouter;