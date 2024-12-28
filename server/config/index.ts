const dotenv = require('dotenv');
dotenv.config();

// MongoDB details :
const PASSWORD :string | null= process.env.PASSWORD ?? null;
const USER_NAME :string | null= process.env.USER_NAME ?? null;
const DB_NAME :string | null= process.env.DB_NAME ?? null;
export const DATABASE_CONNECTION_STRING : string | null = process.env.DATABASE_CONNECTION_STRING ?? null;
export const APP_SECERET :string | null = process.env.APP_SECERET ?? null;
export const PORT :string | null= process.env.PORT ?? null;