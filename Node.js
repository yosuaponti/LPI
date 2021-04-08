const {Client} = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'postgres',
    database: 'lpiDB',
    password: '923012',
    port: 5432,
})

client.connect();

client.query('SELECT NOW()', (err, res) => {console.log(err, res); client.end()});
