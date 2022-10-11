import * as express from "express"
import {db} from "../db"
import * as bcrypt from "bcryptjs";

export const register = (req:express.Request,res:express.Response)=>{
    //CHECK EXISTING USER
  const query = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(query, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const query = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(query, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });

}

export const login = (req:express.Request,res:express.Response)=>{
    
}

export const logout = (req:express.Request,res:express.Response)=>{
    
}