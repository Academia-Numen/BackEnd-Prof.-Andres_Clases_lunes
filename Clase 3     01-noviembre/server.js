
const express = require('express')


const app = express();
const PORT = 8080


//contenido estatico

app.use( express.static('public'))



app.get('/', (req,res) => {
    res.send('Pagina de inicio')
})

app.get('/primer-server',(req,res) => {
    res.send('Nuestro primer server con express!!!!!!')
})
app.get('/segundo-server',(req,res) => {
    res.send('Nuestro segundo server con express!!!!!!')
})
app.listen(PORT,()=>{
    console.log(`servidor corriendo en puerto ${PORT}`)
})