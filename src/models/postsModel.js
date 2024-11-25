import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Estabelece a conexão com o banco de dados, utilizando a string de conexão armazenada na variável de ambiente STRING_CONEXAO.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados.
export async function getAllPosts() {

    const db = conexao.db("imersao-instalike"); // Seleciona o banco de dados "imersao-instalike" da conexão estabelecida.
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    
    return colecao.find().toArray(); // Retorna todos os documentos da coleção "posts" em formato de array.
    
};

export async function criarPost(novoPost) {
    
    const db = conexao.db("imersao-instalike"); // Seleciona o banco de dados "imersao-instalike" da conexão estabelecida.
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    
    return colecao.insertOne(novoPost);
    
};

export async function atualizarPost(id, post) {
    
    const db = conexao.db("imersao-instalike"); // Seleciona o banco de dados "imersao-instalike" da conexão estabelecida.
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    
    const objID = ObjectId.createFromHexString(id);

    return colecao.updateOne({ _id : new ObjectId(objID) }, { $set : post });
    
};
