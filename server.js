const express = require('express')
const path = require('path')
const morgan = require('morgan')

  

const PORT = process.env.PORT || 8080

const app = express()
app.enable("trust proxy");
app.use(morgan("dev"))
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (req, res) => {
    const ipAddress = req.socket.remoteAddress;
    console.log(ipAddress)
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)