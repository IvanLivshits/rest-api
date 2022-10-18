import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Low, JSONFile } from 'lowdb';

//Route to the current directory
const _dirname = dirname(fileURLToPath(import.meta.url));

//Route to the test data
const file = join(_dirname, 'data.json');

const adapter = new JSONFile(file);
const db = new Low(adapter);

export default db;