'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('blogdetails', {
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
    blogContent: {
      type: DataTypes.TEXT('long'),
      allowNull: true
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
    tableName: 'blogdetails'
  });

  Model.associate = function (models) {
    // define associations here
  };

  return Model;
};
