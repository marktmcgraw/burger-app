// Base code used from Section 14, Activity 12 in class

module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        len: [1]
      }
    },
  });
  return Burger;
};