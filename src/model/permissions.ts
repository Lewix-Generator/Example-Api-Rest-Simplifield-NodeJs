/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
  


/**
 * Define attributes
 */
const permissions = db.sequelize.define('permissions',{
 
    permission_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    permission_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
 

});

permissions.sync();

export default permissions;