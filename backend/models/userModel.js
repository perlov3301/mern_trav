import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const myobj = { // name:String or object
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
//pre=before 'save'(into database)==before User.create=='this'
//using of 'next' cause that within middleware we have to move 
userSchema.pre('save',async function (next) { 
    const isM = this.isModified('password');//this=create=save
    if(!isM) { next(); }
    // password created or modified
    const salt = await bcrypt.genSalt(10);// number of characters
    // this.password is meanwhile plain text
    // now we hash password before save into data base
    this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.matchPassword = async function(enteredPassword){
    // match plain text to hashed 
    const match1 = await bcrypt.compare(enteredPassword, this.password);
    // return true or false
    // return      await bcrypt.compare(enteredPassword, this.password);
    return match1;
};
const User = mongoose.model('User', userSchema);

export default User;
