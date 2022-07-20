const AuthorController = require('../controllers/author.controller');
module.exports = function (app) {
	// ! READ ALL
	app.get('/api/authors/', AuthorController.findAllAuthors);
	// ! READ ONE
	app.get('/api/authors/:id', AuthorController.findOneSingleAuthor);
	// ! CREATE
	app.post('/api/authors', PersonController.createPerson);
	// ! PUT
	app.put('/api/authors/:id', AuthorController.updateExistingAuthor);
	// ! DELETE
	app.delete('/api/authors/:id', AuthorController.deleteAnExistingAuthor);
};
