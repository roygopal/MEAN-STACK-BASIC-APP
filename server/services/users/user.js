let userModel = require('./models/model');

module.exports = {
    createUsers: function (req, res) {
        let userDetail = req.body;
        let newUser = new userModel({name: userDetail.name, username: userDetail.email, password: userDetail.password});
        console.log("Hit create user", userDetail);
        return newUser.save((err) => {
            if (err) {
                res.status(504);
                res.end(err);
            } else {
                console.log('user saved');
                res.status(200);
                res.end();
            }
        });
    },
    getUser: function (req, res) {
        userModel.find({}, (err, docs) => {
            if (err) {
                res.status(504);
                res.end(err);
            } else {
                res.status(200);
                res.end(JSON.stringify(docs));
            }
        });
    },
    deleteUser: function (req, res) {
        userModel.remove({username: req.params.email}, (err, result) => {
            if (err) {
                res.status(504);
                res.end(err);
            } else {
                console.log('User Deleted Successfully !');
                res.end();
            }

        });
    }
};