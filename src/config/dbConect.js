import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jed:123@project1.xcgwc.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;