import express from 'express';
import jwt from 'jsonwebtoken';
// import authenticateToken from './app_jwt_auth';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// const secretKey = process.env.app_secretKey;
const secretKey = 'app_jwt_secret1';
//endpoint for generating and returning a JWT token
app.post('/login',(req,res)=>{
    //validation the user's credential
    const {username, password } = req.body;
    if(username === 'john1' && password === 'p1') {
    //jwt.sign(payload,key=jwt.Secret, jwt.SignOptions)
        const token = jwt.sign(
          {username},secretKey,{expiresIn:'1h'}
        );
        // return the token to the client
        console.log("app_jwtjs;token:", token);
        res.status(201).json({ message: "we get a token1" });
    } else { res.status(401).json(
        {message:"invalid username or password"}); 
      }
});// login
// protected endpoint that requires a valid JWT token
app.get('/protected', authenticateToken, (req, res)=>{
  res.json({message:'you are authorized to access the resource'});
});
// middleware for auth and adding user info to request
function authenticateToken(req,res,next) {
  //extract the token from header
  const authHeader = req.header['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({message: 'no token provided'});
  }
  // verify and decode the token
  jwt.verify(token, secretKey, (err,decoded)=>{
    if (err) {
      return res.status(403).json({message:"invalid token"});
    } 
    // add the decoded user information to the request object
    req.user = decoded;
    next();
  });
}

// start the server
app.listen(3000, ()=>{
  console.log('server on port 3000');
});