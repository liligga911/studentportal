import express, { Application, Request, Response } from 'express'
import path from 'path'

export default async (app: Application) => {

    app.use(express.json())

    app.use(express.urlencoded({ extended: true }))

    app.get('/', (req: Request, res: Response) => {
        res.send("gracias student-portal")
    })

    return app;
}
