import Token from "./token";

const authMiddleware = async (req, res, next) => {
    const token = req.header('X-Auth-Token');
};