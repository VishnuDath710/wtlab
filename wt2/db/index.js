import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import Student from './student.module.js'
// import mongoose from 'mongoose';
const app= express();

app.use(cors());

app.use(express.json())


mongoose.connect('mongodb+srv://srinikethanreddy01:nikki2004@cluster0.pmts6af.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("mongodb connected")
}).catch(()=>{
    console.log("failure")
})
app.listen(5000, () => {
    console.log("Server running on port 6000");
});

app.post("/", async (req, res) => {
    try {
        console.log('Request body:', req.body);

        const student = new Student(req.body);
        console.log('New student object:', student);

        const newStudent = await student.save();
        console.log('New student saved to the database:', newStudent);

        res.send({ message: student});
    } catch (err) {
        console.error('Error in POST route:', err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/details', async (req, res) => {
    const rollNo = req.body.roll;

    try {
        const student = await Student.findOne({ Rollno: rollNo });

        if (student) {
            res.json({ student });  // Assuming you want to send JSON data instead of rendering HTML
        } else {
            res.json({ message: 'Student not found' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


app.put('/update', async (req, res) => {
  try {
    const { name,clas,roll, section,age, gender } = req.body;
    const updatedUser = await Student.findOneAndUpdate({ Rollno: roll }, { name,clas, section, age, gender }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log('Student data updated:', updatedUser);
    res.json({ student: updatedUser });
  } catch (error) {
    console.error('Error updating student data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/delete', async (req, res) => {
  try {
    const rollToDelete = req.query.roll;
    const deletedUser = await Student.findOneAndDelete({ Rollno: rollToDelete });
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log('Student data deleted:', deletedUser);
    res.json({ student: deletedUser });
  } catch (error) {
    console.error('Error deleting student data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});