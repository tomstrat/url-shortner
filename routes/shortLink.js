const form = require('../views/form');
const layout = require('../views/layout');

module.exports = (app, DB) => {
	app.get('/:id', (req, res) => {
		//Check for ID not url string
		if (typeof req.params.id === 'number') {
			DB.findURL(req.params.id, (url) => {
				if (!url) {
					res.send(layout(form('No short url exists!')));
				} else {
					res.redirect(url);
				}
			});
			//If url string then send 404
		} else {
			res.send('404 Page Doesnt Exist');
		}
	});
};
