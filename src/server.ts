import express, { request, response } from "express"
import {apiRoutes} from "./routes"

const app = express()

app.use(express.json())
app.use(apiRoutes)

app.listen(3333, () => console.log("Server running at port 3333"))
