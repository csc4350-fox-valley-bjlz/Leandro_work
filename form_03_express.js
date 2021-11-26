var dateConverter = require('./public/js/dateConvert.js')
var express = require('express');
var app = express();
var router = express.Router()
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

// define the home page route
router.get('/completeForm03', function (req, res) {
    res.send('PDRMA_Form_03_Property_Loss_Report')
})
// define the about route
router.post('/about', function (req, res) {
    res.send('About')
    let form_03 = req.body;
    con.connect(function(err){
        let sql = 'INSERT INTO form_03_forms SET ?'
        console.log('got body:',form_03)
        con.query(sql,form_03,function(err,result,fields){
            if (err) throw err;
            if (err) throw err;
            res.end(JSON.stringify(result));
        })
    })
})

router.get('Home', function (req, res) {
    res.send('Home')
})

router.get('/index', function (req, res) {
    res.send('index')
})

router.get('/newFormSelection', function (req, res) {
    res.send('newFormSelection')
})

router.get('/ViewFormsSelection', function (req, res) {
    res.send('ViewFormsSelection')
})

module.exports = router


app.listen(port);
console.log('Listening on:' + port);
