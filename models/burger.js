module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },


    }, {underscored: true});
    
   Burger.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    models.Burger.hasMany(models.Customers, {
      onDelete: "cascade"
    });
  };

  
    return Burger;
};