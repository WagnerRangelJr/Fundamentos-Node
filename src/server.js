import http from 'node:http'

const users = []
const server = http.createServer((req, res) => {

    const {method, url} = req
    console.log(req.headers)

    if (method == 'GET' && url == '/users'){
        return res
        .setHeader('Content-type','application/json')
        .end( JSON.stringify(users))    
    }

    if (method == 'POST' && url == '/users'){

        users.push({
            id: 1,
            name:"Jonh Doe",
            email:"jonhdoe@email.com",
            role:"developer",
        })
        return res.end("Criacao de usario")
    }
    return res.end("Hello Word")
})

server.listen(3333)