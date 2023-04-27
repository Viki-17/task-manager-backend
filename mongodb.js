const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database");
    }
    console.log("Connected to DB");
    const db = client.db(databaseName);

    // db.collection("users").insertOne({
    //   name: "Vignesh",
    //   age: 26,
    // });

    // db.collection("task").insertMany(
    //   [
    //     {
    //       description: "ticket booking",
    //       completed: true,
    //     },
    //     {
    //       description: "bank statement",
    //       completed: true,
    //     },
    //     {
    //       description: "mobile purchase",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    //     db.collection("task").findOne(
    //       { _id: new ObjectID("63f8411427d18badac47d8b0") },
    //       (error, response) => {
    //         if (error) {
    //           console.log("Unable to fetch findone");
    //         }
    //         console.log(response);
    //       }
    //     );

    //     db.collection("task")
    //       .find({ completed: true })
    //       .toArray((error, response) => {
    //         if (error) {
    //           console.log("Unable to fetch find");
    //         }
    //         console.log(response);
    //       });

    // db.collection("task")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("task")
    //   .deleteOne({ description: "bank statement" })
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
