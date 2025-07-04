const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController');

// Protect these routes:
router.post('/', protect, createStudent);
router.put('/:id', protect, updateStudent);
router.delete('/:id', protect, deleteStudent);
// This one can stay public if you want:
router.get('/', getStudents);
router.get('/:id', getStudentById);


module.exports = router;
