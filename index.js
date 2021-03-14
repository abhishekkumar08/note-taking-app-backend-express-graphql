import cors from "cors";
import express from "express";
import graphlHTTP from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema";

/* Importing mongoose and connect to a MongoDb database notetaking_db */
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/notetaking_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const PORT = 4300;

app.use(cors());

/* GET request to the server
 * The .get() function takes two main parameters.
 * The first is the URL for this function to act upon.
 * In this case, we are targeting '/', which is the root of our API;
 */
app.get("/", (req, res) => {
  res.json({
    message: "Notetaking API v1",
  });
});
app.use(
  "/graphql",
  graphlHTTP({
    schema: schema,
    graphiql: true,
  })
);

/* The app is started using the .listen() function,
 * which also tells the app which port to listen on by using the PORT variable
 */
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
