import express from "express"
import { PostController } from "../controller/PostController"
import { PostBusiness } from "../business/PostBusiness"
import { PostDatabase } from "../database/PostDatabase"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"

export const postRouter = express.Router()

const postControlller = new PostController (
    new PostBusiness(
        new PostDatabase(),
        new IdGenerator(),
        new TokenManager()
    )
)

postRouter.post("/", postControlller.createPost)
postRouter.get("/", postControlller.getPost)
postRouter.put("/:id", postControlller.editPost)
postRouter.delete("/:id", postControlller.deletePost)

postRouter.put("/:id/like", postControlller.likeOrDislikePost)

