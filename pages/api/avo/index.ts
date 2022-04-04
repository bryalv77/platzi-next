import {IncomingMessage, ServerResponse} from 'http';
import  DB from '@database';

export const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({data: allEntries, length: allEntries.length}));
};

export default allAvos;