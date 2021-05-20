const express = require('express');
const db_config = require('../config/database.js');
const conn = db_config.init();
const router = express.Router();
const async = require('async');


router.post('/signIn', function(req, res, next) {

    // Synchronous processing
    async.waterfall([
        function(callback){
            const signInSql = 'SELECT * FROM user WHERE id = ?';
            const signInParams = [req.body.id]

            conn.query(signInSql, signInParams, function(err, rows, fields) {
                if(err) {
                    console.log('Select fail\n' + err);
                    res.send("Fail")
                }
                else {
                    if (rows[0] == undefined){
                        callback(null, true)
                    }
                    else{
                        res.send(rows[0]);
                        callback(null, false)
                    }
                }
            });
        },

        function(arg, callback){
            if(arg){
                const signUpSql = 'INSERT INTO user VALUES(?, ?, ?, ?)';
                const signUpParams = [req.body.id, req.body.name, req.body.passwd, req.body.email];

                conn.query(signUpSql, signUpParams, function(err) {
                    if(err) {
                        console.log('Insert fail\n' + err);
                        res.send('Fail');
                    }
                    else {
                        res.send('Sign Up success');
                    }
                });
            }
        }
    ])

});

// Delete
router.post('/withdrawal', function(req, res, next) {
    const sql = 'DELETE FROM user WHERE id = ?';
    const params = [req.body.id];
    conn.query(sql, params, function(err) {
        if(err) {
            console.log('Delete fail\n' + err);
            res.send('Fail');
        }
        else {
            console.log("Withdrawal success")
            res.send('Withdrawal success');
        }
    });
});

module.exports = router;