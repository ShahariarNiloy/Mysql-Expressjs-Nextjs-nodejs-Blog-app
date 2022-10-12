// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data: AxiosResponse = await axios.post(
      "http://localhost:3001/api/auth/register",
      req.body
    );

    res.status(200).json({ data: data.data });
  } catch (error) {
    res.status(409).json(error?.response?.data);
  }
}
