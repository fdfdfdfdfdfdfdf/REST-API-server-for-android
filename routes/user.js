const express = require('express');
const db_config = require('../config/database.js');
const conn = db_config.init();
const router = express.Router();
const async = require('async');


router.post('/signIn', function(req, res, next) {

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
});


router.post('/login',function(req,res,next){

    const signInSql = 'SELECT passwd FROM user WHERE id = ?';
    const signInParams = [req.body.id]
    
     conn.query(signInSql, signInParams, function(err, rows, fields) {
        if(err) {
             console.log('Select fail\n' + err);
            res.send("Fail")
         }
        else {
            if (rows[0] == undefined){
                console.log('not user\n' + err);
                res.send("not user")
            }
            else{
                if(req.body.passwd==rows[0].passwd){
                        console.log('login\n' + err);
                        res.send("login success")
             }
            else{
                console.log('not correct passwd\n' + err);
                res.send("login fail, please try again")
            }
        }
    }
});
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