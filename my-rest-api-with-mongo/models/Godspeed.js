const mongoose = require('mongoose');

const godspeedSchema = new mongoose.Schema({
    PatientId: Number,
    timestamp: Date,
    Anthropomorphism: {
        question1: Number,
        question2: Number,
        question3: Number,
        question4: Number,
        question5: Number
    },
    Animacy: {
        question1: Number,
        question2: Number,
        question3: Number,
        question4: Number,
        question5: Number,
        question6: Number
    },
    Likeability: {
        question1: Number,
        question2: Number,
        question3: Number,
        question4: Number,
        question5: Number
    },
    Perceived_Intelligence: {
        question1: Number,
        question2: Number,
        question3: Number,
        question4: Number,
        question5: Number
    },
    Perceived_Safety: {
        question1: Number,
        question2: Number,
        question3: Number
    }
});

module.exports = mongoose.model('Godspeed', godspeedSchema);
