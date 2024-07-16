/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import customers from './customers';  


/**
 * Define attributes
 */
const wishlists = db.sequelize.define('wishlists',{
 
    wishlist_id: {
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

wishlists.sync();

export default wishlists;