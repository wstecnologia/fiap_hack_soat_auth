import dotenv from 'dotenv';
import 'module-alias/register';
dotenv.config();

import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { sessionConfig } from './infrastructure/config/sessionConfig';
import { router } from './interfaces/routes/authRoutes';

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(sessionConfig);
app.use(router);
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
      swaggerOptions: { persistAuthorization: true },
  }),
)

const port = process.env.PORT || 3000

app.listen(port,()=>{
  console.log(`Server online in port ${port}`)
})
