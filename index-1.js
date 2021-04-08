const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'lpiDB',
    password: '923012',
    port: 5432,
})

client.connect();

client.query('SELECT * FROM "lpiMember', (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log(res);
    }
});
