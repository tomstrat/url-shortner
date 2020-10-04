const form = require('../views/form');
const submit = require('../views/submit');
const layout = require('../views/layout');

module.exports = (app, DB) => {
	app.get('/', (req, res) => {
		res.send(layout(form('')));
	});

	app.post('/submit', (req, res) => {
		const url = req.body.url;
		if (!url) {
			res.send(layout(form('no url submitted')));
		} else if (!url.match(/^https?:\/\//)) {
			res.send(layout(form('incorrect url format')));
		} else {
			const getID = (id) => {
				console.log(`Woo i got it ${id}`);
				res.send(layout(submit(id)));
			};
			//show success page with the new link
			DB.registerURL(url, getID);
		}
	});
};
