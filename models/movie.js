const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watchSchema = new Schema({
    userId: {
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

module.exports = mongoose.model('Movie', movieSchema);