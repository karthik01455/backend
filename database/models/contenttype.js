'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ContentType.hasMany(models.Collections, {
        foreignKey: 'contentId',
      });
    }
  }
  ContentType.init({
    contentTypeName: {type:DataTypes.STRING, unique: true, allowNull: false},
    Types: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'ContentType',
  });
  return ContentType;
};