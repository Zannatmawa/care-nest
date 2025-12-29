import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DBNAME;

let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function getCollection(collectionName) {
    const client = await clientPromise;
    const db = client.db(dbName);
    return db.collection(collectionName);
}
export default clientPromise
