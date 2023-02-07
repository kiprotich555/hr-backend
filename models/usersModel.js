const mongoose = require('mongoose');

//table for users
const UsersSchema = mongoose.Schema({
    userId: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    role: { type: String, requied: true },
    roleType: { type: String, requied: true },
    password: { type: String, required: true },
}, {
    timestamps: true
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users 