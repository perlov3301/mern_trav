import mongoose from "mongoose";

const myobj = { 
    name: {
        type: String,
        required: true
    } ,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
};
const userSchema = mongoose.Schema(myobj,{ timestamps: true});
const User = mongoose.model('User', userSchema);

export default User;
