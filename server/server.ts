import express from 'express'
import App from './services/ExpressService'
import Dbconncection from './services/MongoService'
import { PORT } from './config'


export const startServer = async () => {
    let app = express()
    await App(app)
    await Dbconncection()
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    })
}

if (require.main === module) {
    startServer()
}
else {
    require.main = module;
}

