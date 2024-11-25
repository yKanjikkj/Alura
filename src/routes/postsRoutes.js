import express from "express";
import multer from "multer";
import cors from "cors";
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsControllers.js";

const corsOptions = {
    origin : "http://localhost:8000",
    optionsSuccessStatus : 200
}

// Configura as opções de armazenamento do Multer:
const storage = multer.diskStorage({
    
    destination : function (req, file, cb) {
        cb(null, 'uploads/'); // Define o diretório onde os arquivos serão salvos (no caso, 'uploads/')
    },

    filename : function (req, file, cb) {
        cb(null, file.originalname); // Usa o nome original do arquivo para salvar
    }

});

const upload = multer({ dest : "./uploads", storage }); // Cria uma instância do Multer com as configurações de armazenamento

// Define as rotas da aplicação:
const routes = (app) => {
    
    app.use(express.json()); // Habilita o middleware para analisar requisições com corpo em formato JSON.

    app.use(cors(corsOptions))

    app.get("/posts", listarPosts); // Define uma rota para atender requisições GET na URL "/posts".
    
    app.post("/posts", postarNovoPost); // Define uma rota para criar um post.
    
    app.post("/upload", upload.single("img"), uploadImagem); // Define uma rota para fazer upload de uma imagem.
    
    app.put("/upload/:id", atualizarNovoPost); // 

}

export default routes;