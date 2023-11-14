import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  token : string
}

interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
      email: string;
      password: string;
    };
  }

export default function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {
    const email = req.body.email;
    const password = req.body.password;

    res.status(200).json({token : "VibhorPhalke si the bst of all time sit bst of ll tiaiudfhlkjah dfjh "})
}
