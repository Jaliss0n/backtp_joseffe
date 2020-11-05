require('dotenv/config');
 
// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        }
    }
}



////// COMENTARIO PARA USAR QUANDO O BANG ESTIVER OFF
// Define a string de conexão com o banco de dados
/*module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: "db_clientes",
            dialect: 'mysql',
            user: 'root',
            password: 'kirito123'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}*/
