const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'lpiDB',
    password: '923012',
    port: 5432,
})

client.connect()
.then(() => console.log('Connected Sucessfully'))
.then(() => client.query('SELECT * FROM "lpiMember"'))
.then(result => console.table(results.row))
.catch(e => console.log)
.finally(() => client.end())
