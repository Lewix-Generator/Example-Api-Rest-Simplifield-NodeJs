/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import wishlists from './wishlists'; 
import products from './products';  


/**
 * Define attributes
 */
const wishlist_items = db.sequelize.define('wishlist_items',{
 
    wishlist_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    wishlist_id: {
        type: DataTypes.INTEGER,
        references: {
            model: wishlists,
            key: 'wishlist_id'
        },
    },

    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: products,
            key: 'product_id'
        },
    },
 

});

wishlist_items.sync();

export default wishlist_items;