"use strict";

module.exports = (sequelize, type) => {
  return sequelize.define("Resource", {
    Id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Title: type.STRING,
    Description: type.STRING,
    ResourceUrl: type.STRING,
    PopularityIndex: {
      type: type.INTEGER,
      defaultValue: 0
    }
  });
};