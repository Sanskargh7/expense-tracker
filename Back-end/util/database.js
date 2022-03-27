const Sequelize = require('sequelize')

const sequelize = new Sequelize('expancetracker', 'root', 'sans@0000R', {
    dialect: 'mysql',
    host: 'localhost'
})
sequelize.authenticate().then(()=>{
    console.log('connected')
}).catch(error=>{
    console.log(error)
})

module.exports = sequelize;