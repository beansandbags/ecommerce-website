const mongoose  = require('mongoose');
 
const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    googleID:{
        type: String
    },
    facebookID: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String,
        default: "1xx1",
    },
    
    //Cart Implementation 1
    cart: {
        type: [String],
        default: []
    },
 
    wishlist: {
        type: [String],
        default: []
    },
    purchase_h: {
        // Purchase History
        type: [String],
        default: []
    },
    comments: {
        // Comment record
        type: [String],
        default: []
    },
});
 
module.exports = User = mongoose.model("user", UserSchema);
