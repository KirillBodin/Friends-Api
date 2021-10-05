const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendsSchema = new Schema({
    user_from: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    user_to: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    is_accepted: {
        type: Boolean,
        default: false
    }
});



module.exports = Item = mongoose.model('Friends', FriendsSchema);
