import * as express from 'express';
import usersRoute from "./routes/users.route";
import authRoute from "./routes/auth.route";
import postsRoute from "./routes/posts.route";

const app = express()

app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/posts",postsRoute)

app.listen(3001,()=>{
    console.log("Listening from port 3001")
})