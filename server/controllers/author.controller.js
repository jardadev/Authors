const { Author } = require('../models/author.model');

// ! READ ALL
module.exports.findAllAuthors = (req, res) => {
	Author.find()
		.then((allDaAuthors) => res.json({ authors: allDaAuthors }))
		.catch((err) =>
			res.json({ message: 'Something went wrong', error: err })
		);
};

// ! READ ONE
module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then((oneSingleAuthor) => res.json({ author: oneSingleAuthor }))
		.catch((err) =>
			res.json({ message: 'Something went wrong', error: err })
		);
};

// ! CREATE
module.exports.createAuthor = (request, response) => {
	const { name } = request.body;
	Author.create({
		name,
	})
		.then((author) => response.json(author))
		.catch((err) => response.status(400).json(err)); // Will return error to author
};

// ! PUT
module.exports.updateExistingAuthor = (req, res) => {
	Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((updatedAuthor) => res.json({ author: updatedAuthor }))
		.catch((err) =>
			res.json({ message: 'Something went wrong', error: err })
		);
};

// ! DELETE
module.exports.deleteAnExistingAuthor = (req, res) => {
	Author.deleteOne({ _id: req.params.id })
		.then((result) => res.json({ result: result }))
		.catch((err) =>
			res.json({ message: 'Something went wrong', error: err })
		);
};
