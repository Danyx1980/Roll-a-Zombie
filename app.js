var express = require('express'),
    app = express(); 

    app.set('view engine', 'ejs'); 
    app.use(express.static(__dirname + "/public"));

    app.get("/", function(req, res){
        res.render("index"); 
    });

    app.get("*", function(req, res){
        res.redirect("/"); 
    })

    //app.listen(3000);

    app.listen(process.env.PORT, process.env.IP, function(){
        console.log("Roll A Zombie Started! in " + process.env.PORT);
    });