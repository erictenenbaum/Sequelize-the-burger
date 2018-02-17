var express = require("express");

var router = express.Router();

var db = require("../models/");



// Old Code before I added the customer feature

// router.get("/", function(req, res) {
//     db.Burger.findAll({}).then(function(results) {
//         res.render("index", { burgers: results });
//     });
// });


router.get("/", function(req, res) {
    db.Burger.findAll({include: db.Customers}).then(function(results) {
        console.log(JSON.stringify(results, null, 2));
        res.render("index", { burgers: results });

    });
});



router.post("/api/burger", function(req, res) {
    console.log(req.body.burger_name);
    db.Burger.create({ burger_name: req.body.burger_name }).then(function(results) {
        res.json({ id: results.insertId });
    });
});


router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log(req.body);

    db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(results => {
            // res.json(results)
            console.log("Put Console Log", results);
            console.log("Empty", results);
            db.Customers.create({
                customer_name: req.body.customer_name,
                review: req.body.review,
                burger_id: req.params.id
            }).then(data => {
                console.log(data);
                res.json(data);

            }).catch(err => {
                console.log(err)
                res.send("error");
            });

        });
});


// Old code before I added the customer feature


//   router.put("/api/burger/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     // console.log(req.body);

//      db.customers.create({
//         customer_name: req.body.customer_name,
//         buger: req.params.id,
//         review: req.body.review
//     }).then(results => {
//         console.log(results);
//         res.json(results);

//     });



// });


router.delete("/api/burger/:id", function(req, res) {
    db.Burger.destroy({ where: { id: req.params.id } }).then(results => {
        res.json(results);
    });
})




















module.exports = router;