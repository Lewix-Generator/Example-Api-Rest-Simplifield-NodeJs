/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import customers from './customers';  


/**
 * Define attributes
 */
const shopping_carts = db.sequelize.define('shopping_carts',{
 
    cart_id: {
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

    created_at: {
        type: DataTypes.DATE,
    },
 

});

shopping_carts.sync();

export default shopping_carts;