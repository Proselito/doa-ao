//configurando o servidor
const express = require("express")
const server = express()

//configurar o servidor para apresentar arquivos estaticos
server.use(express.static('public'))

//habilitar body do formulario
server.use(express.urlencoded({ extended: true }))

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

//lista de doadoresvetor ou array
const doadores = [ 
    {
        name: "Diego Fernandes",
        blood: "AB+",
    },

    {
        name: "Augusta Jorge",
        blood: "B-",
    },

    {
        name: "Julio Estendar",
        blood: "AB+",
    },

    {
        name: "Clarice Estendar",
        blood: "O+",
    }
]

//configurar a apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html", { doadores })

})

server.post("/", function(req, res) { 
    //pegar dados do formulario

    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    //colocar valores dentro do array
    doadores.push({
        name:name,
        blood:blood,
    })

    return res.redirect("/")

})


//ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
    console.log("iniciei um servidor")
})