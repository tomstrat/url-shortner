const sqlite3 = require('sqlite3').verbose();

function DatabaseAPI(DB_PATH, dbSchema) {
	const DB = new sqlite3.Database(DB_PATH, (err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log(`Connected to ${DB_PATH} database.`);

		DB.exec('PRAGMA foreign_keys = ON;', (err) => {
			if (err) {
				console.error("Pragma statement didn't work.");
			} else {
				console.log('Foreign Key Enforcement is on');
			}
		});
	});

	DB.exec(dbSchema, (err) => {
		if (err) {
			console.log(err);
		}
	});
	//Exposed Functions
	return {
		registerURL(url, cb) {
			const sql = `
        INSERT INTO Urls (url)
        VALUES (?)
      `;
			const find = `
        SELECT id
        FROM Urls
        WHERE url = ?
      `;
			DB.run(sql, url, function (err) {
				if (err) {
					console.log(err);
				}
			});
			DB.get(find, url, (err, row) => {
				if (err) {
					console.log(err);
					return;
				} else {
					cb(row.id);
				}
			});
		},
		findURL(id, cb) {
			const sql = `
        SELECT url
        FROM Urls
        WHERE id = ?
      `;
			DB.get(sql, id, (err, row) => {
				if (err) {
					console.log(err);
					return false;
				} else {
					if (!row) {
						cb(false);
					} else {
						cb(row.url);
					}
				}
			});
		},
	};
}

module.exports = { DatabaseAPI };
