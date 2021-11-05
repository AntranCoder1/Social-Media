require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

const authRouter = require("./routers/auth.router");
const userRouter = require("./routers/user.router");
const postRouter = require("./routers/post.router");

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@social-media.pgrhv.mongodb.net/Social-Media?retryWrites=true&w=majority`, 
            {
                useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false
            }
        )
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

connectDB();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use('/api/posts', postRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})