// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    console.log(req.body)
    try {
        console.log("gakdf")
       const data = await axios.post("http://localhost:3001/api/auth/register",req.body)

       console.log(data)
       res.status(200).json({data })
    } catch (error) {
        res.status(409).json(error)
    }
    
  }
  