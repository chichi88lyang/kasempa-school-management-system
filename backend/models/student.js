const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    grade: { type: String, required: false },
    form: { type: String, required: false }, 
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);

