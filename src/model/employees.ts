/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
 
import departments from './departments'; 
import roles from './roles';  


/**
 * Define attributes
 */
const employees = db.sequelize.define('employees',{
 
    employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    first_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },

    phone: {
        type: DataTypes.STRING,
    },

    hire_date: {
        type: DataTypes.DATE,
    },

    department_id: {
        type: DataTypes.INTEGER,
        references: {
            model: departments,
            key: 'department_id'
        },
    },

    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: roles,
            key: 'role_id'
        },
    },
 

});

employees.sync();

export default employees;