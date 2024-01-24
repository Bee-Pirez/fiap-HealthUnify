const express = require('express')
const path = require('path');
const routes = require('./routes')

const app = express()
const port = 3000

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '..', 'resources')));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/arquivos', express.static(path.join(__dirname, '..', 'arquivos')));



// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'resources', 'index.html'));
});


routes(app)

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`))

module.exports = app;