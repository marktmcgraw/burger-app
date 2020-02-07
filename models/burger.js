// Base code used from Section 14, Activity 12 in class

module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {
    burger_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      timestamps: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      timestamps: false,
    },
    
  });
  return Burger;
};