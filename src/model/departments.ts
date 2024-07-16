/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
  


/**
 * Define attributes
 */
const departments = db.sequelize.define('departments',{
 
    department_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    department_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
 

});

departments.sync();

export default departments;