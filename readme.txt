https://github.com/bradtraversy/mern-auth
Akamai cloud Computing Services "Nanode"= $5/month for shared virtual Machine
express Web Framework=>express
http only coocies=> cookie-parser
to load environment variables from a .env file into process.env=> dotenv
interact with Mongodb => Mongoose
(hashing) avoid passwords to be seen even by database admin=> bcryptjs
we use JWT for authentication=> jsonwebtoken
cookie-parser for store cookie in HTML local storage
#entry Point for API=>server.js
postman: mern_travers=>content-Type=application/x-www-form-urlencoded
       medium_android=>content-Type=application/json

* within package.json add:
"type":"module" to allow import syntax with simple ES (instead of commonjs)
 for server only ; to run > node backend/server.js
 nodemon for running dev for both backend and frontend; >npm run server
 ***
 POST: /api/users -register a user
 POST: /api/users/auth -authenticate a user and get token
 POST: /api/users/logout - logout the user  and clear cookie
 GET: /api/users/profile -get user prifile
 ***
 git branch -M main
git remote add origin https://github.com/perlov3301/mern_trav.git
git push -u origin main

Current IP Address (147.235.209.3/32) added!
Visit Network Access to modify your settings.
*An IP address has been added to the IP Access List.
*Sample dataset successfully loaded.
 Access it in Collections or by connecting with the MongoDB Shell.
*Connect to mernauth
**set up connection security
1.Add a connection IP address
 our current IP address (147.235.209.3) has been added to enable local connectivity.
2.Create a database user(name-password)
 perlov1001-perl1001
** choose a connection method
 ***with nodejs driver
   1.npm install mongodb
   2.add connection string into application code
      const uri ="mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
mongodb+srv://perlov1001:perl1001@mernauth.yqxxozd.mongodb.net/?retryWrites=true&w=majority&appName=mernauth

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://perlov1001:perl1001@mernauth.yqxxozd.mongodb.net/?retryWrites=true&w=majority&appName=mernauth";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

 ***from vscode 
 ***from data explorer
 ***from Shell
 ***with compass
   connection string:mongodb+srv://perlov1001:perl1001@mernauth.yqxxozd.mongodb.net/
 ***atlas sql