import mongoose, { ConnectOptions } from 'mongoose'
import { DATABASE_CONNECTION_STRING } from '../config'

export default async () => {
    try {
        await mongoose.connect(DATABASE_CONNECTION_STRING as string, {
            useNewUrlParser: true
        } as ConnectOptions)
        console.log('Db is connected')
    }
    catch (e) {
        console.log(e)
    }
    return;
}
