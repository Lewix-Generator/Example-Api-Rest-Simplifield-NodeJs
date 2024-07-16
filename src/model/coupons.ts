/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
  


/**
 * Define attributes
 */
const coupons = db.sequelize.define('coupons',{
 
    coupon_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    coupon_code: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },

    discount: {
        type: DataTypes.INTEGER,
    },

    expiration_date: {
        type: DataTypes.DATE,
    },
 

});

coupons.sync();

export default coupons;