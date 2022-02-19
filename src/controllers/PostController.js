const mongoose = require('../database/db_mongo.js');
const Post = mongoose.model('Post');

module.exports = {
    
    // Listar
    async list(request,response){
        const posts = await Post.find();

        return response.json(posts);
    },

    // Buscar por id
    async listByAutor(request, response){
        const posts = await Post.find().where({"autor": request.params.autor});

        return response.json(posts);
    },
    // Create
    async create(request,response){
        const newPost = await Post.create(request.body);

        return response.json(newPost);
    },
    // Update
    async update(request,response){
        const post = await Post.findByIdAndUpdate(request.params.id, request.body, { new: true});

        return response.json(post);
    },
    
    // Delete
    async delete(request,response){
        const post = await Post.findByIdAndDelete(request.params.id);

        return response.send("Deletado com sucesso!!!");
    }
}