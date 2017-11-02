var {Client} = require('pg');

exports.buildConnection = function(){
    var conf = {user: 'postgres', 
                password: ''};

    var conString = `postgres://${conf.user}:${conf.password}@localhost:5432/express`;
    return new Client(conString);
}