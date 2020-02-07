// Base code used from ToDo App Example from Brian

const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {

  class Burger extends Sequelize.Model {}

  Burger.init({
    burger_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      timestamps: false,
    },
    devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            timestamps: false,
          }


  }, {sequelize, modelName: 'Burger' });

  return Burger;

}
