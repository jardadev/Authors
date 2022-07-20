const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); //
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/person.routes')(app); // Loads available routes
app.listen(8080, () => {
	console.log('Listening at Port 8080');
});
