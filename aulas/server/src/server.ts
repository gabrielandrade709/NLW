import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações de back-end  
// POST: Criar uma nova informação no back-end
// PUt: Atualizar uma informação existente no banck-end
// DELETE: Remover uma infirmação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET  http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Resquest Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: São parâmentros que vem an própria rota geralmente opcionais para filtros, paginação
// Resquest body: Prâmentros para criação/atualização de informaçÕes


app.listen(3333);