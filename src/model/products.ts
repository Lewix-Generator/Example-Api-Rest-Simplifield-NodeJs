/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import categories from './categories'; 
import suppliers from './suppliers';  


/**
 * Define attributes
 */
const products = db.sequelize.define('products',{
 
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    product_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    description: {
        type: DataTypes.STRING,
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    stock: {
        type: DataTypes.INTEGER,
    },

    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: categories,
            key: 'category_id'
        },
    },

    supplier_id: {
        type: DataTypes.INTEGER,
        references: {
            model: suppliers,
            key: 'supplier_id'
        },
    },
 

});

products.sync();

export default products;