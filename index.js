const sqlite3 = require('sqlite3').verbose();

// create a new database file users.db or open existing users.db
const db = new sqlite3.Database('./nfl-fantasy-clone.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the nfl-fantasy-clone.db database.');
});

// db.serialize let us run sqlite operations in serial order
db.serialize(() => {
    // 1rst operation (run create table statement)
    db.run('CREATE TABLE IF NOT EXISTS users(email text, password text)', (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
    // 2nd operation (insert into users table statement)
    // db.run(`INSERT INTO users(email,password)
    //           VALUES('petran@pkoulianos.com','QxLUF1bgIAdeQX'),
    //                 ('petranb2@gmail.com','bv5PehSMfV11Cd')`, (err) => {
    //     if (err) {
    //         console.log(err);
    //         throw err;
    //     }
    // });
    // 3rd operation (retrieve data from users table)
    // db.each(`SELECT email FROM users`, (err, row) => {
    //     if (err) {
    //         console.log(err);
    //         throw err;
    //     }
    //     console.log(row.email);
    // }, () => {
    //     console.log('query completed')
    // });

});


// Always close the connection with database
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});