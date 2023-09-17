const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('VideoGame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    isofDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.DATEONLY
    },
    rating: {
      type: DataTypes.DECIMAL(3,2)
    }
  },{ timestamps: false });
};
