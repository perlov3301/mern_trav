// byseness logic for routes
   import asyncHandler from "express-async-handler";
   // bellow notice for route /api/users/auth
// @desc Auth user/set token
// route POST request to  /api/users/auth
// @access Public=you don't have to be loged in to access this route
const authUser = 
   (req, res) => {  
      res.status(200).json({ message: 'userControllerjs; Auth User' });
     }
//   asyncHandler(
//     async (req, res) => {
//         res.status(200).json({ message: 'userControllerjs;Auth User' });
//     })
;
const authGet = (req, res) => { res.send("<b>it is alright</b>")};


export {  authUser, authGet };