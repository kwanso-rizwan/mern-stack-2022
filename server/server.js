import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 4000;

const app = express();

app.use(cors);

// mongodb-connect

// mongoose.connect("mongodb+srv://rizwan:rizwan@cluster0.0d1ov.mongodb.net/?retryWrites=true&w=majority")
// .then(() => console.log("MongoDB Connection is Successful!"))
// .catch((err) => console.error(err));

await mongoose.connect("mongodb+srv://rizwan:rizwan@cluster0.0d1ov.mongodb.net/?retryWrites=true&w=majority");
console.log("MongoDB Connection is Successful!");

// route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// start-server
app.listen(PORT, () => {
  console.log(`Backend Server is Running at http://localhost:${PORT}`);
});
