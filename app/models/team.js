import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Team = sequelize.define('teams', {
    name: { type: DataTypes.STRING,  allowNull: false  }
}, {
    timestamps: true,
    freezeTableName: true
})

export default Team
