const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

//middleware
app.use(cors());
app.use(express.json())

const users = [
    {id: 1,name:'rasel',email: 'rasel@gmai.com'},
    {id: 2,name:'rahul',email: 'rahul@gmai.com'},
    {id: 3,name:'rajesh',email: 'rajesh@gmai.com'},
]

app.get('/',(req,res)=>{
    res.send("User Management server is running");
})

app.get('/users',(req,res)=>{
    res.send(users);
})

app.post('/users',(req,res)=>{
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port,()=>{
    console.log(`Server is running on Port : ${port}`)
})
