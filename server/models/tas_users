import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_product = sequelize.define('tas_users', {
    ID: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    CODE: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
 
  }, {
    tableName: 'tas_products',
     timestamps: false
  });


export {Tas_users};
