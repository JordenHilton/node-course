// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5f2ef19c78b5c3a25a3b3856") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("unable to fetch");
    //     }

    //     console.log(user);
    //   }
    // );

    //     db.collection("users")
    //       .find({ age: 27 })
    //       .toArray((error, users) => {
    //         console.log(users);
    //       });

    //     db.collection("users")
    //       .find({ age: 27 })
    //       .toArray((error, count) => {
    //         console.log(count);
    //       });
    //   }
    // );

    db.collection("tasks").findOne(
      { _id: new ObjectID("5f2ef3c80e9093a27e9035d9") },
      (error, task) => {
        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
