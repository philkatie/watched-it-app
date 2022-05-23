const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watchSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    apiId: {
        type: String,
        required: true
    },
    watches: [watchSchema]
});