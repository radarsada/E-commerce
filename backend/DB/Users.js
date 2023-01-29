const { Mongoose, default: mongoose } = require("mongoose");
mongoose.set('strictQuery', false);
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
module.exports= User =mongoose.model("Users",userSchema);
// module.exports = User = mongoose.model('user', UserSchema)