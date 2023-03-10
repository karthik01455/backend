const {Collections} = require('../../database/models');
const collectionService = require('../../src/services/collections');

describe('createCollection', () => {
  it('should create a collection when correct values are passes', async () => {
    const contentId = 1;
    const content = {
      test: 'test'
    };
    jest.spyOn(Collections, 'create').mockResolvedValue({
      contentId,
      content,
      id: 1
    });
    return collectionService.createCollection(
      contentId,
      content
    ).then((collection) => {
      expect(collection).toEqual({
        contentId,
        content,
        id: 1
      });
    }
    );
  }
  );
  describe('getCollectionByContentId', () => {
    it('should return all collections when id is passed', async () => {
      const contentId = 1;
      const collections = [
        {
          contentId,
          content: {
            test: 'test'
          },
          id: 1
        },
        {
          contentId,
          content: {
            test: 'test'
          },
          id: 2
        }
      ];
      jest.spyOn(Collections, 'findAll').mockResolvedValue(collections);
      return collectionService.getCollectionByContentId(contentId).then((collections) => {
        expect(collections).toEqual(collections);
      }
      );
    }
    );
    it('should return an empty array when no collections are found', async () => {
      const contentId = 1;
      const collections = [];
      jest.spyOn(Collections, 'findAll').mockResolvedValue(collections);
      return collectionService.getCollectionByContentId(contentId).then((collections) => {
        expect(collections).toEqual(collections);
      }
      );
    }
    );
   



  }

  );
  describe('getCollectionById', () => {
    it('should return a collection by id', async () => {
      const id = 1;
      const collection = {
        contentId: 1,
        content: {
          test: 'test'
        },
        id: 1
      };
      jest.spyOn(Collections, 'findByPk').mockResolvedValue(collection);
      return collectionService.getCollectionById(id).then((collection) => {
        expect(collection).toEqual(collection);
      }
      );
    }
    );
    it('should throw error when no collection is found', async () => {
      const id = 1;
      jest.spyOn(Collections, 'findByPk').mockResolvedValue(null);
      expect(collectionService.getCollectionById(id)).rejects.toThrow();
    }
    );
    
    
  });

  describe('updateCollection', () => {
    it('should update a collection when correct values are passes', async () => {
      const id = 1;
      const contentId = 1;
      const content = {
        test: 'test'
      };
      const collection = {
        contentId,
        content,
        id
      };
      jest.spyOn(Collections, 'update').mockResolvedValue([1]);
      jest.spyOn(Collections, 'findByPk').mockResolvedValue(collection);
      return collectionService.updateCollection(
        id,
        contentId,
        content
      ).then((collection) => {
        expect(collection).toEqual(collection); 
      }
      );
    }
    );
    it('should throw error when no collection is found', async () => {
      const id = 1;
      const contentId = 1;
      const content = {
        test: 'test'
      };
      jest.spyOn(Collections, 'update').mockResolvedValue(null);
      expect(collectionService.updateCollection(
        id,
        contentId,
        content
      )).rejects.toThrow();
    }
    );
  
  

    describe('deleteCollection', () => {
      it('should delete a collection when correct values are passes', async () => {
        const id = 1;
        const collection = {
          contentId: 1,
          content: {
            test: 'test'
          },
          id: 1
        };
        jest.spyOn(Collections, 'destroy').mockResolvedValue(1);
        jest.spyOn(Collections, 'findByPk').mockResolvedValue(collection);
        return collectionService.deleteCollection(id).then((collection) => {
          expect(collection).toEqual(collection); 
        }
        );
      }
      );
    });
    it('should throw error when no collection is found', async () => {
      const id = 1;
    
      jest.spyOn(Collections, 'destroy').mockResolvedValue(null);
      expect(collectionService.deleteCollection(id)).rejects.toThrow();
    }
  
    );
  }
  );
});
