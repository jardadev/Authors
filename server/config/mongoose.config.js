const mongoose = require('mongoose');
const DB = 'authors';

mongoose
	.connect(`mongodb://localhost/${DB}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log(`Established a connection to database: ${DB}`))
	.catch((err) =>
		console.log(
			`Something went wrong when connecting to database: ${DB}`,
			err
		)
	);
