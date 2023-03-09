const express = require('express');
const contentTypeController = require('../controllers/contentType');
const contentTypeRouter =express.Router();
contentTypeRouter.post('/', contentTypeController.createContentType);
contentTypeRouter.get('/all', contentTypeController.getAllContentTypes);
contentTypeRouter.get('/:id', contentTypeController.getContentById);
contentTypeRouter.put('/:id', contentTypeController.updateContentType);
contentTypeRouter.delete('/:id', contentTypeController.deleteContentType);
module.exports=contentTypeRouter;