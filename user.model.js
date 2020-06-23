module.exports = {

    create: (connection, body, callback) => {
    connection.query('insert into users SET ?', body, (err, results) => {
    if (err) {
    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
    return;
    }
    callback({ array: null, id: null, success: true });
    });
    },
   
   
    getAll: (connection, callback) => {
    connection.query('select * from users', (err, results) => {
    if (err) {
    callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
    return;
    }
    callback({ array: results, id: null, success: true });
    })
    },

    getId: (connection, id, callback) => {
        connection.query('select * from users where idUser = ' + id, (err, results) => {
        if (err) {
        callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
        return;
        }
        callback({ array: null, id: results[0] || null, success: true });
        })
        },

        delete: (connection,body,callback) => {
            connection.query('delete from users where idUser = '+body.idUser, (err, results) => {
            if (err) {
            callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
            return;
            }
            callback({ array: null, id: null, success: true });
            })
            },

            update: (connection,body,callback) => {
                connection.query('update users set name = ?, lastname = ?, contact = ?, cellphone = ? WHERE idUser= ?',
                [body.name,body.lastname,body.contact,body.cellphone,body.idUser], (err, results) => {
                if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
                }
                callback({ array: null, id: null, success: true });
                });
                }
               
   
   }