import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { HashManager } from './services/HashManager'
import { userRouter } from './router/UserRouter'
import { postRouter } from './router/PostRouter'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT) || 3003}`)
})

app.use("/users", userRouter)

app.use("/posts", postRouter)


app.get("/ping", (req, res) => {
    res.send("Pong!")
  })

//Para senhas reais 
// const hashManager = new HashManager()
// hashManager.hash("senhareal").then((res)=> {
//     console.log(res)
// })

