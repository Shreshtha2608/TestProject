var usermodel = require('../model/usermodel');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user_create = function (req, res) {
    var user = new usermodel(
        {
            name: req.body.name,
            id: req.body.id
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User added successfully')
    })
};