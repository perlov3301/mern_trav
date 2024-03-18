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
 perlov1001-perlov1001
** choose a connection method
 ***with nodejs driver
   1.npm install mongodb
   2.add connection string into application code
     mongodb+srv://perlov1001:perlov1001@mernauth.2buv02r.mongodb.net/?
     retryWrites=true&w=majority&appName=mernauth
     mongodb+srv://perlov1001:<password>@mernauth.2buv02r.mongodb.net/?retryWrites=true&w=majority&appName=mernauth
 ***from vscode 
 ***from data explorer
 ***from Shell
 ***with compass
 ***atlas sql