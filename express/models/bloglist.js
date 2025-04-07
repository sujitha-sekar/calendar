'use strict';

// Define a model for department table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('bloglist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blogTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blogDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    tableName: 'bloglist'
  });
  // Adding a class level method.
  Model.associate = function (models) {
    this.id = this.belongsTo(models.blogdetails);
  };
  return Model;
};