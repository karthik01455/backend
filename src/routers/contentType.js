const express = require('express');
const contentTypeController = require('../controllers/contentType');
const contentTypeRouter =express.Router();
const {authenticateToken} = require('../middleware/authenticate');
contentTypeRouter.post('/', authenticateToken,contentTypeController.createContentType);
contentTypeRouter.get('/all',authenticateToken, contentTypeController.getAllContentTypes);
contentTypeRouter.get('/:id', contentTypeController.getContentById);
contentTypeRouter.put('/:id', contentTypeController.updateContentType);
contentTypeRouter.delete('/:id', contentTypeController.deleteContentType);
module.exports=contentTypeRouter;