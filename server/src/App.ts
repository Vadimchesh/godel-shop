import mongoose from 'mongoose';
import app from './delivery';

const PORT: string | number = process.env.PORT || 4000;

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.l0jbc.mongodb.net/${process.env.MONGO_DB}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

mongoose
  .connect(uri, options)
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch(error => {
    throw error;
  });
