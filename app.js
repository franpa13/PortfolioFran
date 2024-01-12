//Haz tú validación en javascript acá
const express = require('express');
const app = express();
const path= require('path')
const PORT = 3002; // Puedes cambiar el número de puerto según tus necesidades
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/views/index.html'))
})
app.get('/sobre-mi', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/views/index.html'))
})





