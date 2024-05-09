import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const secretKey = process.env.app_secretKey;

// middleware for authenticating JWT token and add Payload
function authenticateToken (req,res,next) {
// extract the token from the authoriztion header
   const authHead = req.headers['authorization'];
   const token = authHead && authHead.split(' ')[1];
   if (!token) { return 
      res.status(401).json({ message: 'no token provided' });
    }
   //verify and decode the token
   //function verify(token: string, 
   //  secretOrPublicKey: jwt.Secret, 
   //  options: jwt.VerifyOptions & 
   //           {complete: true;}): jwt.Jwt 
   jwt.verify(token, secretKey, (err,decoded)=>{
      if(err) {
         return res.status(403).json({message:"invalid token"});
      }
      //add the decoded user information to the request object
      req.user = decoded;//string|jwt.JWTPayLoad|undefined
      next();
   });
}

export default authenticateToken;