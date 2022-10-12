import * as express from "express";
// import * as cookieParser from "cookie-parser";
const cookieParser = require("cookie-parser");
import usersRoute from "./routes/users.route";
import authRoute from "./routes/auth.route";
import postsRoute from "./routes/posts.route";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

app.listen(3001, () => {
  console.log("Listening from port 3001");
});
