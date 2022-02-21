import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://sam:samir.ajdini1993@cluster0.keidj.mongodb.net/places?retryWrites=true&w=majority"
    );
    const db = client.db();

    const placesCollection = db.collection("places");
    const result = await placesCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "place inserted!" });
  }
};

export default handler;
