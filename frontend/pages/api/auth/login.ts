// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  try {
    const data: AxiosResponse = await axios.post(
      "http://localhost:3001/api/auth/login",
      req.body,
      { withCredentials: true }
    );
    console.log(data.headers["set-cookie"]);

    // const data = await fetch("http://localhost:3001/api/auth/login", {
    //   method: "POST",
    //   mode: "same-origin",
    //   redirect: "follow",
    //   credentials: "include", // Don't forget to specify this if you need cookies
    //   headers: headers,
    // });
    // console.log({ data });
    res.status(200).json({ data: data.data });
  } catch (error) {
    res.status(409).json(error?.response?.data);
  }
}
