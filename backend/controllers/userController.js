// buiseness logic for routes error handler
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
// @desc Auth user/set token
// route POST request to  /api/users/auth
// @access Public=you don't have to be loged in to access this route
const authUser = asyncHandler( async (req, res) => {
        // router.post('/auth', authUser);
        const {email, password} = req.body;
 // console.log(`userControllerjs;auth; email:${email} password:${password}`);
        const user = await User.findOne({email});
        //password is still plain text but user password is hashed
        const aPmatch = user.matchPassword(password);
        if(user && (await user.matchPassword(password))) {
            generateToken(res,user._id);
            res.status(201).json({ 
                //name _id in res depense on my set up
                _id: user._id,
                name: user.name,
                email:user.email,

            });
        } else { // something goes wrong
           res.status(401);//unathorized
           throw Error("Invalid email or password");
        }
    });
// @desc Register a new user
// route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res)=>{
// we need a midleware body_parser:app.use(express.json) within 
    const { name, email, password } = req.body;//name:name
    console.log(`req.body.email:${req.body.email}`);
    const userExists = await User.findOne({ email });// equal email:email
    console.log("userControllerjs; userExists:", userExists);
    if(userExists) { // client error
        res.status(400);
        throw Error("user(email) already exists"); 
    }
    // we are going to create user
      const user = await User.create({
        name,
        email,
        password
      });
      if (user) { //201:success with creation
        generateToken(res, user._id);
        res.status(201).json({
            _id:user._id,
            name: user.name,
            email: user.email,
        });
     } else {  //something goes wrong
        res.status(400);
        throw new Error("invalid user data"); 
      }
    });
// @desc Logout user
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res)=>{
// res.cookie("me","1",{expires:new Date(Date.now()+90000),httpOnly:true})
// cookie(name,value,options(maxage, signed sign, path to '/'))
// name 'myjwt' is from generateTokenjs
    res.cookie("myjwt","",{
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({message: 'user logged out'});
});
// @desc Get user profile  
// route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req,res)=>{
    //access to user through req
    // console.log(`userControllerjs;req.user:${req.user}`);
    const user = {// name _id depense on my setup
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }

    // res.status(200).json({message: 'getUserProfile async'});
    res.status(200).json(user);
});
// @desc Put user profile for updating
// route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res)=>{
    const uID = req.user._id;
    // console.log(`userControllerjs;uID: ${uID}`)
    const user = await User.findById(uID);
    console.log(`userControllerjs;profile put;findById:${user}`);
    if(user) {
    // res.status(200).json({name:user.name,email:user.email});
        user.name =  req.body.name ||  user.name;
        user.email = req.body.email || user.email;
    // if change of password is possible=I let them to change
        if(req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = await user.save();
        res.status(200).json({
            _id:   updatedUser._id,
            name:  updatedUser.name,
            email: updatedUser.email,
        });
    }
    else {
        res.status(404);
        throw new Error("User not found");
    }
});

// @desc auth get for browser test only
// route get request to /api/users/auth
// @access PUBLIC
const authGet = (req, res) => { res.send("<b>it is alright for test purpose only</b>")};


export {  authUser, registerUser, logoutUser,
    getUserProfile,  updateUserProfile, 
    authGet // for browser check purpose only
 };