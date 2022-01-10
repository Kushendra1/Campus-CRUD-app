const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },

    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        isEmail: true,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: './collegeCampus'
    },
    gpa: {
        type: Sequelize.STRING,
        validate: {
            isDecimal: true,
            min:0.0,
            max:4.0
        }
    }






});
// },
//     setterMethods: {
//         setCampus(value){
//             this.setDataValue("campus", value);
//         }
//
//     }



module.exports = Student;