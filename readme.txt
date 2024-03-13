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