/* routes/users.js */
const Router = require("express").Router();
const queries = require('../controllers/users');


/* GET all users on server */
Router.get("/", async (req, res) => {
	try {
		queries.getAllUsers().then(users => {
			res.status(200).json(users);
		});
	}
  catch(err) { console.log(err); }
});

module.exports = Router; /* export Router */