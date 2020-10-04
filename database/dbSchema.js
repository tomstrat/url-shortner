module.exports.dbSchema = `
CREATE TABLE IF NOT EXISTS Urls (
  id integer NOT NULL PRIMARY KEY,
  url text NOT NULL
);
`;
