// Dados
const proffys = [
    { 
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: 79998666530,
        bio: "Entusiasta das melhores tecnoogias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "40", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220] 
    },
    { 
        name: "Liliane",
        avatar: "https://avatars2.githubusercontent.com/u/43457763?s=460&u=7edcdb5ee358ab60b7fd883fc6599b35bf81222a&v=4",
        whatsapp: 79998666530,
        bio: "Entusiasta das melhores tecnoogias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",
        subject: "TI",
        cost: "40", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220] 
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]

// Funcionalidades
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1; 
    return subjects[position];
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query // contem o que aparece depois da ? na url
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0;
    // se tiver data
    if (isNotEmpty) {
        data.subject = getSubject(data.subject);

        // adicionar data à lista de proffys
        proffys.push(data);

        return res.redirect("/study");
    }

    // se não mostrar a página
    return res.render("give-classes.html", { subjects, weekdays })
}

// Servidor
const express = require('express');
const server = express();

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

// Início e configuração do servidor
server
.use(express.static("public")) // configurar arquivos estáticos (css, scripts, imagens)
.get("/", pageLanding) // rotas da aplicação
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500); // start do servidor