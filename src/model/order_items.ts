/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import orders from './orders'; 
import products from './products';  


/**
 * Define attributes
 */
const order_items = db.sequelize.define('order_items',{
 
    order_item_id: {
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

    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: products,
            key: 'product_id'
        },
    },

    quantity: {
        type: DataTypes.INTEGER,
    },

    price: {
        type: DataTypes.INTEGER,
    },
 

});

order_items.sync();

export default order_items;