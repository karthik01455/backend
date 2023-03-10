const collectionRouter = require('express').Router();
const collectionController = require('../controllers/collections');
const {authenticateToken} = require('../middleware/authenticate');
collectionRouter.post('/',authenticateToken, collectionController.createCollection);
collectionRouter.get('/contentId/:contentId',
  authenticateToken,collectionController.getCollectionByContentId);
collectionRouter.get('/:id', authenticateToken,collectionController.getCollectionById);
collectionRouter.put('/:id',authenticateToken, collectionController.updateCollection);
collectionRouter.delete('/:id',
  collectionController.deleteCollection);
module.exports = collectionRouter;