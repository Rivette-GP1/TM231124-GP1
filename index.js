import express from "express";
import 'dotenv/config'
import { dbconnection } from "./config/db.js";
import cors from "cors";
import mongoose from "mongoose";
import orderRouter from "./routes/order.js";
import contactRouter from "./routes/contact.js";


// // create express app
const app = express();

expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: [ "order", "contact" ],
    mongooseModels: mongoose.modelNames(), 
})


app.use(express.json());
app.use(cors({credentials: true, origin: '*'}));

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true }
//     store: MongoStore.create({
//         mongoUrl:process.env.MONGO_URL
//     })
// }));

// use Routes
app.use(orderRouter)
app.use(contactRouter)

dbconnection();

expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));


app.listen(8080, ()=> {
    console.log('app is listening on port 8080');
});