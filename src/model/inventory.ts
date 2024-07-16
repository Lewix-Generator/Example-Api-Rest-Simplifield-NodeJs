/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import products from './products';  


/**
 * Define attributes
 */
const inventory = db.sequelize.define('inventory',{
 
    inventory_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

    last_updated: {
        type: DataTypes.DATE,
    },
 

});

inventory.sync();

export default inventory;