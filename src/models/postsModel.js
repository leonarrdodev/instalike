import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Obtendo o banco de dados 'imersao-instalike' da conexão
    const db = conexao.db('imersao-instalike');
    // Obtendo a coleção 'posts' do banco de dados
    const colecao = db.collection('posts');
    // Retornando um array com todos os documentos da coleção
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
        const db = conexao.db('imersao-instalike');
        const colecao = db.collection('posts');
        return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost){
    const db = conexao.db('imersao-instalike');
    const colecao = db.collection('posts');
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set:novoPost});
}