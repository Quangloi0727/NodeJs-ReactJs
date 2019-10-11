var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanPham',
  password: 'Quangloi0727',
  port: 5432,
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// get data from postgresql
router.get('/getdata', function(req, res, next) {
  pool.query('SELECT * FROM product_info', (err, response) => {
    if(err){
      console.log(err)
    }else {
      res.send(response.rows);
    }
  })
});

/* ADD product. */
router.get('/add', function(req, res, next) {
  res.render('addProduct', { title: 'Thêm sản phẩm' });
});
router.post('/add', function(req, res, next) {
  var product_name=req.body.product_name,
      product_price=req.body.product_price,
      image=req.body.image;
  pool.query('insert into product_info (product_name,product_price,image) values ($1,$2,$3)',[product_name,product_price,image],(err,response)=>{
    if(err){
      console.log(err)
    }else{
      res.redirect('/add');
    }
  })
});

module.exports = router;
