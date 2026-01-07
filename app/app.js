/*
* File: app.js
* Author: Szücs Gyöngyi
* Copyright: 2026, Szücs Gyüngyi
* Group: Szoft II/2/E
* Date: 2026-01-07
* Github:https://github.com/Gyongyos149
* Licenc: MIT
*/

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import fs from 'fs'
import router from './routes/api.js'
import './models/modrels.js'
import { UPLOAD_PATH } from './utils/paths.js'
import sequelize from './database/database.js';


const app = express()

const logfile = 'access.log'
var accessLogStream = fs.createWriteStream(logfile, { flags: 'a' })
app.use('/images', express.static(UPLOAD_PATH))
app.use(morgan('dev', { stream: accessLogStream }))
app.use(cors())
app.use(express.json())
sequelize.sync()
    .then(() => console.log("Database synced"))
    .catch(err => console.error("DB error:", err));
app.use('/api', router);

export default app

