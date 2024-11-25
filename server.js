import express from "express"; // Importa o framework Express.js para criar a aplicação web.
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do aplicativo Express.js.
const app = express();

app.use(express.static("uploads"))

routes(app)

// Inicia o servidor Express.js na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
