const { Sequelize } = require('sequelize');

//senha vazia
const sequelize = new Sequelize("nodemvc2", 'nodeuser', 'nodepassword', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('conectado ao BD');
} catch (error) {
    console.log(`não foi possível conectar: ${error}`);
}

exports.default = sequelize;