import * as express from 'express';
import { login, logout, register } from '../controllers/auth.controller';


const routes = express.Router();

routes.post('/register',register)

routes.post('/login',login)

routes.post('/logout',logout)


export default routes;