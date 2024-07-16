/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
  


/**
 * Define attributes
 */
const shippers = db.sequelize.define('shippers',{
 
    shipper_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    shipper_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    contact_name: {
        type: DataTypes.STRING,
    },

    contact_email: {
        type: DataTypes.STRING,
    },

    contact_phone: {
        type: DataTypes.STRING,
    },
 

});

shippers.sync();

export default shippers;