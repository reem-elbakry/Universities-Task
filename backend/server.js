const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const countryRoutes = require("./routes/countryRoutes");
const universityRoutes = require("./routes/universityRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");

//connect to DB
connectDB();

const app = express();

//Avoid cors error
app.use(cors());

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//To Routes
app.use("/api/countries", countryRoutes);
app.use("/api/universities", universityRoutes);

//serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("production mode please :D"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`server is running on ${port}`));
