const contentTypeService = require('../../src/services/contentType');
const contentTypeController = require('../../src/controllers/contentType');

describe('contentTypeService', () => {
  describe('createContentType', () => {
    it('should create a content type when correct values are passes', async () => {

      const mockReq = {
        body: {
          contentTypeName: 'test',
          Types: ['test', 'test2']

        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      jest.spyOn(contentTypeService, 'createContentType').mockResolvedValue({
        contentTypeName: 'test',
        Types: ['test', 'test2'],
        id:1


      });
      return contentTypeController.createContentType(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.send).toHaveBeenCalledWith({
          
          contentTypeName: 'test',
          Types: ['test', 'test2'],
          id:1
        });
      });
    });
    it('should return 500 when an error occurs', async () => {
      const mockReq = {
        body: {
          contentTypeName: 'test',
          Types: ['test', 'test2']
    
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(contentTypeService, 'createContentType').mockRejectedValue(new Error('Error'));
      return contentTypeController.createContentType(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal server error' });
      });
    }
    );
  });
  describe('getAllContentTypes', () => {
    it('should return all content types', async () => {
      const mockReq = {};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      jest.spyOn(contentTypeService, 'getAllContentTypes').mockResolvedValue([{
        contentTypeName: 'test',
        Types: ['test', 'test2'],
        id:1
      }]);
      return contentTypeController.getAllContentTypes(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.send).toHaveBeenCalledWith([{
          contentTypeName: 'test',
          Types: ['test', 'test2'],
          id:1
        }]);
      });
    });
    it('should return 500 when an error occurs', async () => {
      const mockReq = {};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(contentTypeService, 'getAllContentTypes').mockRejectedValue(new Error('Error'));
      return contentTypeController.getAllContentTypes(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal server error' });
      });
    }
    );
  });
  describe('getContentById', () => {
    it('should return a content type when correct values are passes', async () => {
      const mockReq = {
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      jest.spyOn(contentTypeService, 'getContentById').mockResolvedValue({
        contentTypeName: 'test',
        Types: ['test', 'test2'],
        id:1
      });
      return contentTypeController.getContentById(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.send).toHaveBeenCalledWith({
          contentTypeName: 'test',
          Types: ['test', 'test2'],
          id:1
        });
      });
    });
    it('should return 404 when a content type is not found', async () => {
      const mockReq = {
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(contentTypeService, 'getContentById').mockResolvedValue(null);
      return contentTypeController.getContentById(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Content not found' });
      });
    }
    );
    it('should return 500 when an error occurs', async () => {
      const mockReq = {
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(contentTypeService, 'getContentById').mockRejectedValue(new Error('Error'));
      return contentTypeController.getContentById(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal server error' });
      });
    }
    );

  });
  describe('updateContentById', () => {
    it('should update a content type when correct values are passes', async () => {
      const mockReq = {
        params: {
          id: 1
        },
        body: {
          contentTypeName: 'test',
          Types: ['test', 'test2']
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      jest.spyOn(contentTypeService, 'updateContentType').mockResolvedValue({
        contentTypeName: 'test',
        Types: ['test', 'test2'],
        id:1
      });
      return contentTypeController.updateContentType(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.send).toHaveBeenCalledWith({
          contentTypeName: 'test',
          Types: ['test', 'test2'],
          id:1
        });
      });
    });
    it('should return 404 when a content type is not found', async () => {
      const mockReq = {
        params: {
          id: 1
        },
        body: {
          contentTypeName: 'test',
          Types: ['test', 'test2']
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(contentTypeService, 'updateContentType').mockResolvedValue(null);
      return contentTypeController.updateContentType(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Content not found' });
      });
    }
    );
    it('should return 500 when an error occurs', async () => {
      const mockReq = {
        params: {
          id: 1
        },
        body: {
          contentTypeName: 'test',
          Types: ['test', 'test2']
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(contentTypeService, 'updateContentType').mockRejectedValue(new Error('Error'));
      return contentTypeController.updateContentType(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal server error' });
      });
    }
    );
        
  });
  describe('deleteContentById', () => {
    it('should delete a content type when correct values are passes', async () => {
      const mockReq = {
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(contentTypeService, 'deleteContentType').mockResolvedValue({
        contentTypeName: 'test',
        Types: ['test', 'test2'],
        id:1
      });
      return contentTypeController.deleteContentType(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(200);
       
      });
    });
    it('should return 404 when a content type is not found', async () => {
      const mockReq = {
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(contentTypeService, 'deleteContentType').mockResolvedValue(null);
      return contentTypeController.deleteContentType(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Content not found' });
      });
    }
    );
    it('should return 500 when an error occurs', async () => {
      const mockReq = {
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(contentTypeService, 'deleteContentType').mockRejectedValue(new Error('Error'));
      return contentTypeController.deleteContentType(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal server error' });
      });
    }
    );
        
  });
  
});



