import dotenv from 'dotenv';
import app from './src/app';

dotenv.config();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server Running on : http://localhost:${port}`);
});
