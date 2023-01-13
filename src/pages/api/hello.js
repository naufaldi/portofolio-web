// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

import HelloJson from './json/hello.json';

export default function hello(req, res) {
  res.status(200).json(HelloJson);
}
