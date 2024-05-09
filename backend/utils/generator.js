import Token from "./token";
const generator = async (userId) => {
    try {
        const token = uuidv4();// generate a random token string
        const tokenDoc = new Token({
            user: userId,
            token: token
        });
        await tokenDoc.save();
        return token;
    } catch (err) {
        console.error(err);
        return null;
    }
};