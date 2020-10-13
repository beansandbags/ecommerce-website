const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

// https://medium.com/swlh/set-up-an-express-js-app-with-passport-js-and-mongodb-for-password-authentication-6ea05d95335c

const ThirdPartyProviderSchema = new Schema({
    provider_name: {
        type: String,
        default: null
    },
    provider_id: {
        type: String,
        default: null
    },
    provider_data: {
        type: {},
        default: null
    }
});

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: [String],
        required: true
    },
    
    //Cart Implementation 1
    cart: {
        type: [String],
        default: [null]
    },

    wishlist: {
        type: [String],
        default: [null]
    },
    purchase_h: {
        // Purchase History
        type: [String],
        default: [null]
    },
    comments: {
        // Comment record
        type: [String],
        default: [null]
    },
    third_party_auth: [ThirdPartyProviderSchema],
    date: {
        type: Date,
        default: Date.now
    }
},
{ strict: false }
);

module.exports = User = mongoose.model("user", UserSchema);