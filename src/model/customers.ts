/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
  


/**
 * Define attributes
 */
const customers = db.sequelize.define('customers',{
 
    customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    first_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },

    phone: {
        type: DataTypes.STRING,
    },

    created_at: {
        type: DataTypes.DATE,
    },
 

});

customers.sync();

export default customers;