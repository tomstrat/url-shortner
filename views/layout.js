module.exports = body => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>URL Shortner</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <h1>URL Shortner</h1>
    ${body}
  </body>
  </html>
`;
};
