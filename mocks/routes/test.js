// Mock Routes for test
module.exports = function(app, mongoose) {
  app.get('/test', function(req, res) {
    if (true) {
      return res.json({
        test: "OK"
      });
    } else {
      return res.status(401).send({err: "Error"});
    }
  });
};
