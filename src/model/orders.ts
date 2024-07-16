/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import customers from './customers';  


/**
 * Define attributes
 */
const orders = db.sequelize.define('orders',{
 
    order_id: {
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

    order_date: {
        type: DataTypes.DATE,
    },

    status: {
        type: DataTypes.STRING,
    },

    total: {
        type: DataTypes.INTEGER,
    },
 

});

orders.sync();

export default orders;