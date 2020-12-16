// DB の connect 処理をモジュールにして読み込む
const db = require('./lib/db');
//db: connect()
const con = db.connect();
const email = 'tanaka@test.com';
let sql = 'DELETE FROM users WHERE email = ?;';
con.query(sql, email, (err, results) => {
    if (err) throw err;
    console.log('delete success.');
})
//DB接続終了
con.end();