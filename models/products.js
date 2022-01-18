'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsToMany(models.Customer, {through: 'favorites', foreignKey: 'productId', as: 'favoriteProduct'})
      
    }
  };
  Products.init({
    price: DataTypes.INTEGER,
    title: DataTypes.STRING,
    reviewScore: DataTypes.STRING,
    brand: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};