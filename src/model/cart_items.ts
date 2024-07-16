/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import shopping_carts from './shopping_carts'; 
import products from './products';  


/**
 * Define attributes
 */
const cart_items = db.sequelize.define('cart_items',{
 
    cart_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    cart_id: {
        type: DataTypes.INTEGER,
        references: {
            model: shopping_carts,
            key: 'cart_id'
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
 

});

cart_items.sync();

export default cart_items;