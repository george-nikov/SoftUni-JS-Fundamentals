const express = require('express')

const app = express()

const mysql = require('mysql');
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'nodemysql'
})


const port = process.env.PORT || 3000

//Create database 
app.get('/createdb',(req, res) =>{
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql, err =>{
        if (err){
            throw err
        }
        res.send("Database Created")
    })
})

//Insert into table
app.get('/new',(req, res) =>{
    let post = {id: "1", name: "Georgi Nikov", time: "2023-04-20", doctor: "Rainova" }
    let sql = 'INSERT INTO customers SET ?'
    let query = db.query(sql, post, err =>{
        if (err){
            throw err
        }
        res.send("Database Created")
    })
})

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/form', (req,res) => {
    res.sendFile(__dirname + '/'+ 'form.html');
});

app.post('/form',(req,res) =>{
    var name = req.body.name;
    var lastname = req.body.lastname

db.connect(err =>{
    if (err){
        throw err
    }
   var sql = "INSERT INTO students (name, lastname) VALUES ('"+name+"','"+lastname+"')";
    db.query(sql, (err,result) =>{
        if (err){
            throw err;
        }
        res.send('STUDENTS ADDED'+result.insertId)
    })
} )
})



app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Server Expresso ☕')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('Server Expresso ☕ About')
})

app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 Not found ☕_☕')
})

app.listen(port,
    () => console.log(`Expresso ☕ is on Port ${port} Ctrl + C to Stop `))
