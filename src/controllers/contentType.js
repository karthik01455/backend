const contentTypeService = require('../services/contentType');

async function createContentType(req, res) {
  try {
    const { contentTypeName, Types,emailId } = req.body;
    console.log('body', req.body);
    const contentType = await contentTypeService.createContentType(contentTypeName, Types ,emailId);
    res.status(201).send(contentType);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });

  }
}
async function getAllContentTypes(req, res) {
  try {
    const { emailId } = req.body;
    const contentTypes = await contentTypeService.getAllContentTypes(emailId);
    res.status(200).send(contentTypes);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });

  }
}

async function getContentById(req, res) {
  try {
    const { id } = req.params;
    const content = await contentTypeService.getContentById(id);
    if(content === null ) {
      res.status(404).json({ message: 'Content not found' });
    }else
      res.status(200).send(content);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });

  }
}

async function updateContentType(req, res) {
  try {
    const { id } = req.params;
    const { contentTypeName, Types } = req.body;
    const content = await contentTypeService.updateContentType(id, contentTypeName, Types);
    if(content === null ) {
      res.status(404).json({ message: 'Content not found' });
    }
    else
      res.status(200).send(content);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function deleteContentType(req, res, ) {
  try {
    const { id } = req.params;
    const content = await contentTypeService.deleteContentType(id);
    if(content === null ) {
      res.status(404).json({ message: 'Content not found' });
    }else
      res.status(200).json({ message: 'Content deleted successfully' });
   
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {  
  createContentType,getAllContentTypes,getContentById,updateContentType,deleteContentType
};