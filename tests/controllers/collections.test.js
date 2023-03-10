const collectionService = require('../../src/services/collections');
const collectionController = require('../../src/controllers/collections');
describe('it should create collections when correct inpiuts are passed', () => {
  it('should create a collection when correct values are passes', async () => {
    const mockReq = {
      body: {
        contentId: 1,
        content: {
          test: 'test'
        }
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    jest.spyOn(collectionService, 'createCollection').mockResolvedValue({
      contentId: 1,
      content: {
        test: 'test'
      },
      id: 1
    });
    return collectionController.createCollection(mockReq, mockRes).then(() => {
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toHaveBeenCalledWith({
        contentId: 1,
        content: {
          test: 'test'
        },
        id: 1
      });
    });
  });
  it('should return 500 when an error occurs', async () => {
    const mockReq = {
      body: {
        contentId: 1,
        content: {
          test: 'test'
        },
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.spyOn(collectionService, 'createCollection').mockRejectedValue(new Error('Error'));
    return collectionController.createCollection(mockReq, mockRes).then(() => {
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal server error' });
    });
  });
  describe('getCollectionByContentId', () => {
    it('should return all collections when id is passed', async () => {
      const mockReq = {
        params: {
          contentId: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      jest.spyOn(collectionService, 'getCollectionByContentId').mockResolvedValue({
        contentId: 1,
        content: {
          test: 'test'
        },
        id: 1
      });
      return collectionController.getCollectionByContentId(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.send).toHaveBeenCalledWith({
          contentId: 1,
          content: {
            test: 'test'
          },
          id: 1
        });
      });
    }
    );
    it('should return 500 when an error occurs', async () => {
      const mockReq = {
        params: {
          contentId: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(collectionService, 'getCollectionByContentId').mockRejectedValue(new Error('Error'));
      return collectionController.getCollectionByContentId(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal server error' });
      });
    }
    );
    it ('should return 404 when no collection is found', async () => {
      const mockReq = {
        params: {
          contentId: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(collectionService, 'getCollectionByContentId').mockResolvedValue(null);
      return collectionController.getCollectionByContentId(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Collection not found' });
      });
    }
    );
  });
  describe('getCollectionById', () => {
    it('should return all collections when id is passed', async () => {
      const mockReq = {
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      jest.spyOn(collectionService, 'getCollectionById').mockResolvedValue({
        contentId: 1,
        content: {
          test: 'test'
        },
        id: 1
      });
      return collectionController.getCollectionById(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.send).toHaveBeenCalledWith({
          contentId: 1,
          content: {
            test: 'test'
          },
          id: 1
        });
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
      jest.spyOn(collectionService, 'getCollectionById').mockRejectedValue(new Error('Error'));
      return collectionController.getCollectionById(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal server error' });
      });
    }

    );
    it ('should return 404 when no collection is found', async () => {
      const mockReq = {
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(collectionService, 'getCollectionById').mockResolvedValue(null);
      return collectionController.getCollectionById(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Collection not found' });
      });
    }
    );

  });
  describe('updateCollection', () => {
    it('should update a collection when correct values are passes', async () => {
      const mockReq = {
        body: {
          contentId: 1,
          content: {
            test: 'test'
          }
        },
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      jest.spyOn(collectionService, 'updateCollection').mockResolvedValue({
        contentId: 1,
        content: {
          test: 'test'
        },
        id: 1
      });
      return collectionController.updateCollection(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.send).toHaveBeenCalledWith({
          contentId: 1,
          content: {
            test: 'test'
          },
          id: 1
        });
      });
    }
    );
    it('should return 500 when an error occurs', async () => {
      const mockReq = {
        body: {
          contentId: 1,
          content: {
            test: 'test'
          }
        },
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(collectionService, 'updateCollection').mockRejectedValue(new Error('Error'));
      return collectionController.updateCollection(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal server error' });
      });
    }
    );
    it ('should return 404 when no collection is found', async () => {
      const mockReq = {
        body: {
          contentId: 1,
          content: {
            test: 'test'
          }
        },
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(collectionService, 'updateCollection').mockResolvedValue([0]);
      return collectionController.updateCollection(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Collection not found' });
      });
    }
    );

  });
  describe('deleteCollection', () => {
    it('should delete a collection when correct values are passes', async () => {
      const mockReq = {
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(collectionService, 'deleteCollection').mockResolvedValue({
        contentId: 1,
        content: {
          test: 'test'
        },
        id: 1
      });
      return collectionController.deleteCollection(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(200);
        
      });
    });
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
      jest.spyOn(collectionService, 'deleteCollection').mockRejectedValue(new Error('Error'));
      return collectionController.deleteCollection(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal server error' });
      });
    }
    );
    it ('should return 404 when no collection is found', async () => {
      const mockReq = {
        params: {
          id: 1
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      jest.spyOn(collectionService, 'deleteCollection').mockResolvedValue(null);
      return collectionController.deleteCollection(mockReq, mockRes).then(() => {
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Collection not found' });
      });
    }
    );
  });
  
        
});



