
var Items = require('../models/model-items')

module.exports = function (server) {

    server.get('/api/customers', (req, res) => {
        Items.
            find({
                name: { $in: ['bed', 'sofa'] }
            }).
            exec(function (err, customers) {
                if (err) {
                    return res.json({ success: false, err: err })
                }
                res.json({ success: true, data: customers })
            });
    })
    

    // server.post('/addItem', (req, res) => {
    //     var user = new Users({ name: req.body.name, email: req.body.email, balance: req.body.balance })
    //     user.save((err, user) => {
    //         if (err) {
    //             return res.json({ success: false, err: err })
    //         }
    //         res.json({ success: true, data: user })
    //     });
    // })
 
}