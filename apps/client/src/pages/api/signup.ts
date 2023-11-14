import { Admin } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from "jsonwebtoken"
import { ensureDbConnected } from '@/lib/dbConnect';
const SECRET = "SECRET"

type Data = {
  token? : string;
  message : string
}

interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
      username: string;
      password: string;
    };
  }

interface MAS
{
    message : string
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {
    await ensureDbConnected();
    const { username, password } = req.body;
    const admin = await Admin.findOne({username})

      if (admin) {
        res.status(403).json({ message : 'Admin already exists'});
      } 
      else {
        const obj = { username: username, password: password };
        const newAdmin = new Admin(obj);
        newAdmin.save();

        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'Admin created successfully', token });
      }  
}
