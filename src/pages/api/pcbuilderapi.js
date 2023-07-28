const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://pc-builder:OIakRGVcTR4JkNFF@cluster0.653afz6.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const featuresCollection = client
      .db("PC-Builder")
      .collection("FeaturedProducts");
    if (req.method === "GET") {
      const product = await featuresCollection.find({}).toArray();
      res.send({ message: "Success", stastus: 200, data: product });
    }
  } finally {
  }
}
export default run;
