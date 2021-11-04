const express = require ('express')

const app = express();

app.use(express.json() )

let count = 0



app.get('/', (req, res) => {
    count++
    res.send('Count' + count)
})

const todos = ['kubi leb', 'kupi sapun']

app.get('/todos', (req, res) =>
{
    res.json(todos)
})

app.post('/todos', (req, res) => {
    const todo = req.bodu.todo
    todos.push(todo)
 })

app.get('/reset' , (req, res) =>
{
    count = 0
    res.send("Cound is 0")
})

app.post('/', (req, res) => {
    const body = req.body
    res.send("bravo")
})

app.listen(3000, () => {
    console.log('listening no http://localhost:3000/')
})