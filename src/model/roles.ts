/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
  


/**
 * Define attributes
 */
const roles = db.sequelize.define('roles',{
 
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    role_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
 

});

roles.sync();

export default roles;