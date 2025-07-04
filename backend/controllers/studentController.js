const Student = require('../models/student');

// ✅ Create Student Controller
const createStudent = async (req, res) => {
    const { name, age, gender, grade, form } = req.body;

    try {
        // Validation: At least grade or form must be provided
        if (!grade && !form) {
            return res.status(400).json({ message: 'Please provide at least grade or form.' });
        }

        // Create student
        const student = await Student.create({
            name,
            age,
            gender,
            grade,
            form
        });

        res.status(201).json({
            _id: student._id,
            name: student.name,
            age: student.age,
            gender: student.gender,
            grade: student.grade,
            form: student.form,
            createdAt: student.createdAt,
            updatedAt: student.updatedAt
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// ✅ Get All Students
const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// ✅ Get Student By ID
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// ✅ Update Student
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// ✅ Delete Student
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// ✅ Export all functions
module.exports = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
