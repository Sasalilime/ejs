// const UserModel = require("../models/user.model");
// const ObjectID = require("mongoose").Types.ObjectId;
//
//
// module.exports.getAllUsers = async (req, res) => {
//     const users = await UserModel.find().select("-password");
//     res.status(200).json(users);
// };
//
// module.exports.userInfo = (req, res) => {
//     if (!ObjectID.isValid(req.params.id))
//         return res.status(400).send("ID unknown : " + req.params.id);
//
//     UserModel.findById(req.params.id, (err, docs) => {
//         if (!err) res.send(docs);
//         else console.log("ID unknown : " + err);
//     }).select("-password");
// };
//
// module.exports.deleteUser = async (req, res) => {
//     if (!ObjectID.isValid(req.params.id))
//         return res.status(400).send("ID unknown : " + req.params.id);
//
//     try {
//         await UserModel.remove({ _id: req.params.id }).exec();
//         res.status(200).json({ message: "Successfully deleted. " });
//     } catch (err) {
//         return res.status(500).json({ message: err });
//     }
// };

let users = [
    number1 = {
        prenom: "louis",
        name: "russo",
        age: 14
    },
    number2 = {
        prenom: "martin",
        name: "terrier",
        age: 18
    }
];

let message = "wesh"

module.exports.getAllUsers = (req, res) => {
    res.status(200).render('home', {users, message});
};


