import express from "express";

import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env;

const app = express();

// configuracion de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuracion de ejs
app.set("view engine", "ejs");
app.set("views", "./src/views");

// configuracion de archivos estaticos
app.use(express.static("./src/public"));

// inicializar la db
import sequelize from "./src/config/configDB.js";

sequelize.sync({ force: false }).then(() => {
  console.log("Base de datos conectada");
});

// creando las rutas
import { homeRouter } from "./src/routers/index.js";

app.use("/", homeRouter);

const PORT_REAL = PORT || 8000;

app.listen(PORT_REAL, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

export default app;
