const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World!')
})
app.get((req, res) => {
	res.send('Hello World')

})
app.get("/twitter", (req, res) => {
	res.send("twitter here")

})
app.get("/login", (req, res) => {
	res.send("<h1>hellow logIn Gest</h1>")
})
app.get('/youtube', (req, res) => {
	res.send('my new web page')

})
app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${port}`)
})
