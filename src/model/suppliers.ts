/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
  


/**
 * Define attributes
 */
const suppliers = db.sequelize.define('suppliers',{
 
    supplier_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    supplier_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    contact_name: {
        type: DataTypes.STRING,
    },

    contact_email: {
        type: DataTypes.STRING,
    },

    contact_phone: {
        type: DataTypes.STRING,
    },
 

});

suppliers.sync();

export default suppliers;