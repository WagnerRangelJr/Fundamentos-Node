import http from 'node:http'
import { json } from './middleware/json.js'

const users = []
const server = http.createServer(async (req, res) => {
    const {method, url} = req

    // middleware que intercepta a requisicao para fazer alteracao 
    await json(req, res)


    if (method == 'GET' && url == '/users'){
        return res
        .end( JSON.stringify(users))    
    }

    if (method == 'POST' && url == '/users'){
        const { name, email, role} = req.body
        users.push({
            id: 1,
            name,
            email,
            role,
        })
        return res.writeHead(201).end()
    }
    return res.writeHead(404).end("Not Found")
})

server.listen(3333)