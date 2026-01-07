import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Player = sequelize.define('players', {
    name: { type: DataTypes.STRING,  allowNull: false  }
}, {
    timestamps: true,
    freezeTableName: true
})

export default Player
