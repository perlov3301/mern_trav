import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {// userId is added to payload
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
   // save into cookie by name 'myjwt'
  res.cookie('myjwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 30*24*60*60*1000// in mlsec
  });
};
export default generateToken;