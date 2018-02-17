module.exports = function(sequelize, DataTypes) {
    var Customers = sequelize.define("Customers", {
        customer_name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
                // allowNull: false
            }
        },
        review: {
            type: DataTypes.TEXT
        }
    }, {underscored: true});

  Customers.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    models.Customers.belongsTo(models.Burger, {
      foreignKey: {
        allowNull: false
      }
    });
  };

    return Customers
};