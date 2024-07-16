/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
  


/**
 * Define attributes
 */
const categories = db.sequelize.define('categories',{
 
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    category_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
 

});

categories.sync();

export default categories;