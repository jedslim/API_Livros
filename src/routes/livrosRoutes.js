import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
 .get("/livros", LivroController.listarLivros)
 .get("/lvros:id", LivroController.listarLivroPorId)
 .get("/livros/busca", LivroController.listarLivroPorEditora)
 .post("/livros", LivroController.cadastrarLivro)
 .put("/livros/:id", LivroController.atualizarLivro)
 .delete("/livros/:id", LivroController.deletarLivro)

export default router;