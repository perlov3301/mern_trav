import jwt from 'jsonwebtoken';
// import expressAsyncHandler from 'express-async-handler';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler (async (req, res, next)=>{
    let token;

    token = req.cookies.myjwt;

    if (token) {
        try {
        // decoded=header + payload + verify_signature
    // decoded_python=payload=jwt.decode(jwt=token,key='secret', algorithms==["hsw256"])
    //nodejs: decodedToken = await jose
    // .jwtVerify(token,jose.createRemoteJWKSet(new URL('https://..)), {algorithms:['RS256],issuer:'https://..,audience:'..'})
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(`authM;keys of jwt.verify=decoded:${Object.keys(decoded)}`);
            const uID = decoded.userId;
            // console.log(`authM;decoded.userId:${uID}`);
            //req.user = owner(===user._id from userController.js)of the token
            // userId is from generateToken.js\
            const u = await User.findById(uID);
            // console.log(`authM;userById:${u}`);
        // is returned query where password is excluded
            req.user = await User.findById(uID).select('-password');
            console.log(`authM; req.user without password:${req.user}`);
            
            next();
        } catch (error) {
            res.status(401);//unathorized
            throw new Error('Not authorized, invalid token');
        }
    }
    else {
        res.status(401);//unathorized
        throw new Error('Not athorized, no token');
    }
});
 
export { protect };
