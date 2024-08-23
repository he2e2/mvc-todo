import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const MONGO_PASS = process.env.MONGO_PASS;
const uri = `mongodb+srv://dddd6368:${MONGO_PASS}@cluster0.um1ss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri);

async function connectDB() {
  try {
    return await client.connect();
  } catch (err) {
    console.error("DB 연결 실패", err);
    process.exit(1);
  }
}

export default connectDB;
