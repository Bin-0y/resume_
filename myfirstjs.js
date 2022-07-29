
import { default as mongodb } from 'mongodb';
let MongoClient = mongodb.MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://980binoy:980binoy@cluster0.7rwjshh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    try {
        debugger;
        const database = client.db("insertDB");
        const haiku = database.collection("haiku");
        // create a document to insert
        const doc = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }
        const result = await haiku.insertOne(doc);

        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
