import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import cors from 'cors';
import productRouter from './routers/productRouter.js';

dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(()=>{
    console.log('Database Connected');
});

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) =>{
    res.send('Server is ready');
});

app.use((err,req,res,next) => {
    res.status(500).send({message:err.message});
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});