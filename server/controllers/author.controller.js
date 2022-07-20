const { Author } = require('../models/author.model');

module.exports.createAuthor = (request, response) => {
	const { name } = request.body;
	Author.create({
		name,
	})
		.then((author) => response.json(author))
		.catch((err) => response.status(400).json(err)); // Will return error to user
};

// module.exports.findAllUsers = (req, res) => {
// 	User.find()
// 		.then((allDaUsers) => res.json({ users: allDaUsers }))
// 		.catch((err) =>
// 			res.json({ message: 'Something went wrong', error: err })
// 		);
// };

// module.exports.findOneSingleUser = (req, res) => {
// 	User.findOne({ _id: req.params.id })
// 		.then((oneSingleUser) => res.json({ user: oneSingleUser }))
// 		.catch((err) =>
// 			res.json({ message: 'Something went wrong', error: err })
// 		);
// };

// module.exports.createNewUser = (req, res) => {
// 	User.create(req.body)
// 		.then((newlyCreatedUser) => res.json({ user: newlyCreatedUser }))
// 		.catch((err) =>
// 			res.json({ message: 'Something went wrong', error: err })
// 		);
// };

// module.exports.updateExistingUser = (req, res) => {
// 	User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
// 		.then((updatedUser) => res.json({ user: updatedUser }))
// 		.catch((err) =>
// 			res.json({ message: 'Something went wrong', error: err })
// 		);
// };

// module.exports.deleteAnExistingUser = (req, res) => {
// 	User.deleteOne({ _id: req.params.id })
// 		.then((result) => res.json({ result: result }))
// 		.catch((err) =>
// 			res.json({ message: 'Something went wrong', error: err })
// 		);
// };
