/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import orders from './orders';  


/**
 * Define attributes
 */
const payments = db.sequelize.define('payments',{
 
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    order_id: {
        type: DataTypes.INTEGER,
        references: {
            model: orders,
            key: 'order_id'
        },
    },

    payment_date: {
        type: DataTypes.DATE,
    },

    amount: {
        type: DataTypes.INTEGER,
    },

    payment_method: {
        type: DataTypes.STRING,
    },
 

});

payments.sync();

export default payments;