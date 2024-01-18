const express = require("express");
const app = express()
const port = 5000
const readline = require('readline');
const mongoose = require('mongoose');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
mongoose.connect('mongodb://localhost:27017/Student')

const studentSchema = new mongoose.Schema({
    name: String,
    roll: Number,
});

const Student = mongoose.model('Student', studentSchema, 'students');
async function findStudent(rollNumber) {
    try {
        const student = await Student.findOne({ rollno: rollNumber }).exec();
        return student;
    } catch (error) {
        console.error(`Error finding student: ${error.message}`);
        return null;
    }
}
r1.question('Enter the rollno', (rollno) => {
    findStudent(rollno).then((student) => {
        if (student) {
            console.log(`Student found: ${student.name}`);
        } else {
            console.log(`Student with roll number ${rollno} not found`);
        }
    });
});