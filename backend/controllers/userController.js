// buiseness logic for routes error handler
   import asyncHandler from "express-async-handler";
// @desc Auth user/set token
// route POST request to  /api/users/auth
// @access Public=you don't have to be loged in to access this route
const authUser = asyncHandler( async (req, res) => {
        res.status(200).json({ message: 'Auth async' });
    });
// @desc Register a new user
// route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res)=>{
     res.status(200).json({message: 'Register User async'});
    });
// @desc Logout user
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'Logout User async'});
});
// @desc Get user profile  
// route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req,res)=>{
    res.status(200).json({message: 'getUserProfile async'});
});
// @desc Put user profile for updating
// route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res)=>{
    res.status(200).json({message: 'updateUserProfile async'});
});

// @desc auth get for browser test only
// route get request to /api/users/auth
// @access PUBLIC
const authGet = (req, res) => { res.send("<b>it is alright for test purpose only</b>")};


export {  authUser, registerUser, logoutUser,
    getUserProfile,  updateUserProfile, 
    authGet // for browser check purpose only
 };