/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import products from './products'; 
import customers from './customers';  


/**
 * Define attributes
 */
const reviews = db.sequelize.define('reviews',{
 
    review_id: {
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

    customer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: customers,
            key: 'customer_id'
        },
    },

    review_date: {
        type: DataTypes.DATE,
    },

    rating: {
        type: DataTypes.INTEGER,
    },

    comment: {
        type: DataTypes.STRING,
    },
 

});

reviews.sync();

export default reviews;