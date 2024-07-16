/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import customers from './customers';  


/**
 * Define attributes
 */
const addresses = db.sequelize.define('addresses',{
 
    address_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    customer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: customers,
            key: 'customer_id'
        },
    },

    street: {
        type: DataTypes.STRING,
    },

    city: {
        type: DataTypes.STRING,
    },

    state: {
        type: DataTypes.STRING,
    },

    postal_code: {
        type: DataTypes.STRING,
    },

    country: {
        type: DataTypes.STRING,
    },
 

});

addresses.sync();

export default addresses;