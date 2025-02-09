import express from 'express';
import Datastore from 'nedb';

const db = new Datastore({ filename: 'users.db', autoload: true });
const app = express();

app.use(express.json());

// Simple health check
app.get('/api/health', (req, res) => {
  res.json({ status: '8bit-ready' });
});

app.listen(3001, () => console.log('8bit server running!'));
