// var form_03 = require('./public/js/form_04_read_to_object.js')
var dateConverter = require('./public/js/dateConvert.js')
var express = require('express');
var app = express();
var mysql = require('mysql');
app.set('view engine', 'pug');
app.use( express.static( 'public'));
const bodyParser = require("body-parser")
//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
//end body-parser configuration
let port = 4444;
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "mysqlrootpassword",
    database: "forms"
});
// var con = mysql.createConnection({
//     host: "https://fox-valley-demo.hinterlong.net/phpmyadmin",
//     user: "phpmyadmin",
//     password: "csc4350",
//     database: "forms"
// });

app.get('/completeForm03',function(req,res){
    con.connect(function(err){
        res.render('PDRMA_Form_03_Property_Loss_Report')
    })
});

app.post('/completeForm03',function(req,res){
    let form_03 = req.body;
    // console.log('got body:',form_04)
    con.connect(function(err){
        let sql = 'INSERT INTO form_03_forms SET ?'
        console.log('got body:',form_03)
        con.query(sql,form_03,function(err,result,fields){
            if (err) throw err;
            // console.log("record maybe inserted")
            // res.render('PDRMA_Form_03_Employee_Injury_Report')
            if (err) throw err;
            res.end(JSON.stringify(result));
        })
    })
})


// go to page that will update a row in form04
app.post('/updateForm03',function(req,res){
    let formid = req.body.form03id
    console.log(formid)
    con.connect(function(err){
        let sql = 'SELECT * FROM form_03_forms WHERE Form03ID=' + formid;
        con.query(sql,function(err,result,fields){
            if (err) throw err;
            // result[0].Todays_Date = dateConverter(result[0].Todays_Date);
            console.log(result)
            res.render('form_03_update',{
                data : result
            })
        })
    })
})


// delete row in form04
app.post('/deleteForm03',function(req,res){
    let formid = req.body.form03idDelete
    console.log(formid)
    con.connect(function(err){
        let sql = 'DELETE FROM form_03_forms WHERE Form03ID=' + formid;
        con.query(sql,function(err,result,fields){
            if (err) throw err;
            console.log(result)
            res.end(JSON.stringify(result));
        })
    })
})


// actually update the information for form04
app.post('/finalUpdateForm03',function(req,res){
    let form_04 = req.body;
    let formid = form_03.Form03ID
    // console.log('got body:',form_04)
    con.connect(function(err){
        let sql = 'UPDATE form_03_forms SET ? WHERE Form03ID=' + formid
        console.log('got body:',form_03)
        console.log(formid)
        con.query(sql,form_03,function(err,result,fields){
            if (err) throw err;
            // console.log("record maybe inserted")
            // res.render('PDRMA_Form_03_Employee_Injury_Report')
            res.end(JSON.stringify(result));
        })
    })
})


app.get('/Home',function(req,res){
    con.connect(function(err){
        res.render('Home')
    })
});

app.get('/index',function(req,res){
    con.connect(function(err){
        res.render('index')
    })
});

app.get('/newFormSelection',function(req,res){
    con.connect(function(err){
        res.render('NewFormSelection')
    })
});

app.get('/ViewFormsSelection',function(req,res){
    con.connect(function(err){
        res.render('ViewFormsSelection')
    })
});

app.get('/ViewForms03',function(req,res){
    // let id = req.body.id;
    // console.log(id)
    // let sql='SELECT * FROM form_03_forms';
    con.connect(function(err){
        let sql = 'SELECT * FROM form_03_forms';
        con.query(sql,function(err,result,fields){
            if (err) throw err;
            // console.log(result)
            res.render('ViewForms03',{
                title : 'form results',
                data : result
            })
        })
    })
});


app.listen(port);
console.log('Listening on:' + port);
// console.log(form_03)