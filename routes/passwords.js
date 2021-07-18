var express = require('express');
var router = express.Router();
var Password = require('../Models/Password');

router.get('/', async function(req, res){
    try{
    const passwords = await Password.findAll({
        where: {
          owner_id: req.oidc.user.sub
        }
      });
    res.render('passwords',{passwords: passwords});
    }
    catch(err){
        res.render('passwords',{passwords: []})
    }
});

router.post('/', async function(req,res){
    console.log(req.body.username);
    try{
   const newpass = await Password.create({
    owner_id: req.oidc.user.sub,
    web_url: req.body.web_url,
    username: req.body.username,
    userpass: req.body.userpass
   });
   res.redirect('/passwords');
}catch(err){
    res.send(err);
}
})

module.exports = router;