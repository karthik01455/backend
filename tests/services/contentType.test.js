const {ContentType} = require('../../database/models');
const contentTypeService = require('../../src/services/contentType');
describe('createContentType', () => {
  it('should create a content type when correct values are passes', async () => {
    const contentTypeName = 'test';
    const Types = ['test', 'test2'];
    jest.spyOn(ContentType, 'create').mockResolvedValue({
      contentTypeName,
      Types,
      id:1
    });
    return contentTypeService.createContentType( 
      contentTypeName,
      Types
    ).then((contentType) => {
      expect(contentType).toEqual({
        contentTypeName,
        Types,
        id:1
      });
    }
    );
  }
  );
  describe('getAllContentTypes', () => {
    it('should return all content types', async () => {
      const contentTypes = [
        {
          contentTypeName: 'test',
          Types: ['test', 'test2'],
          id:1
        },
        {
          contentTypeName: 'test2',
          Types: ['test', 'test2'],
          id:2
        }
      ];
      jest.spyOn(ContentType, 'findAll').mockResolvedValue(contentTypes);
      return contentTypeService.getAllContentTypes().then((contentTypes) => {
        expect(contentTypes).toEqual(contentTypes);
      }
      );
    }
    );
  }
  );
  describe('getContentById', () => {
    it('should return a content type by id', async () => {
      const id = 1;
      const contentType = {
        contentTypeName: 'test',
        Types: ['test', 'test2'],
        id:1
      };
      jest.spyOn(ContentType, 'findByPk').mockResolvedValue(contentType);
      return contentTypeService.getContentById(id).then((contentType) => {
        expect(contentType).toEqual(contentType);
      }
      );
    }
    );
    it('should return null when no content type is found', async () => {
      const id = 1;
      jest.spyOn(ContentType, 'findByPk').mockResolvedValue(null);
      return contentTypeService.getContentById(id).then((contentType) => {
        expect(contentType).toEqual(null);
      }
      );
    }
    );
  }
  );
  describe('updateContentType', () => {
    it('should update a content type when correct values are passes', async () => {
      const id = 1;
      const contentTypeName = 'test';
      const Types = ['test', 'test2'];
      jest.spyOn(ContentType, 'update').mockResolvedValue({
        contentTypeName,
        Types,
        id:1
      });
      return contentTypeService.updateContentType( 
        id,
        contentTypeName,
        Types
      ).then((contentType) => {
        expect(contentType).toEqual({
          contentTypeName,
          Types,
          id:1
        });
      }
      );
    }
    );
    it('should return null when no content type is found', async () => {
      const id = 1;
      const contentTypeName = 'test';
      const Types = ['test', 'test2'];
      jest.spyOn(ContentType, 'update').mockResolvedValue(null);
      return contentTypeService.updateContentType( 
        id,
        contentTypeName,
        Types
      ).then((contentType) => {
        expect(contentType).toEqual(null);
      }
      );
    }
    );
  }
  );
  describe('deleteContentType', () => {
    it('should delete a content type when correct values are passes', async () => {
      const id = 1;
      jest.spyOn(ContentType, 'destroy').mockResolvedValue(1);
      return contentTypeService.deleteContentType(id).then((contentType) => {
        expect(contentType).toEqual(1);
      }
      );
    }
    );
    it('should return null when no content type is found', async () => {
      const id = 1;
      jest.spyOn(ContentType, 'destroy').mockResolvedValue(null);
      return contentTypeService.deleteContentType(id).then((contentType) => {
        expect(contentType).toEqual(null);
      }
      );
    }
    );
  }
  );
            
        
    
});
