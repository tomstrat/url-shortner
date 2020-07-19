module.exports = `
  <h3>Enter your URL and submit to shorten it...</h3>
  <div>
    <form method="POST" action="/submit">
      <input type="text" name="url">
      <input type="submit">
    </form>
  </div>
`;
