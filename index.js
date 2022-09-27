const express = require('express');
const app = express()
app.use(express.json())

const students =[];

app.get('/students',(req,res)=>{
    try{
        res.send(students);
    }catch(error){
        res.send(error);
    }
});

app.get('/',(req,res)=>{
    res.send('Root page')
});

app.get('/help',(req,res)=>{
    res.send('Hello from help')
});

app.post('/students',(req,res)=>{
   try{
    const student = req.body;
    students.push(student);
    res.send(students)

   }catch(error){
    res.send(error)
   }
})

app.put('/students/:id',(req,res)=>{
    try{
        const id = req.params.id;
        const index = students.findIndex((student)=>student.id ==id);
        
        students[index]=req.body;
        res.send(students);

     
 
    }catch(error){
     res.send(error)
    }
 })
 app.delete("/students/:id",(req, res) => {
    try {
        const index = students.findIndex((student) => student.id == req.params.id);
        students.splice(index, 1)
        res.send("deleted")
    } catch (error) {
       res.send(error) 
    }
})
 app.get("/students/:id",(req,res)=>{
    try{
    const student = students.find((student)=> student.id == req.params.id);
    res.send(student)
 }catch(error) {
    res.send(error)
 }
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});