var Events = require('./Events.js');

exports.events = function (req, res) {
  res.json(Events);
  console.log(Events);
};

exports.event = function (req, res) {
  res.json(Events[req.param.eventId]);
  console.log("Event declaration ..");
  console.log(req.param.eventId);
  console.log(Events[req.param.eventId]);
};
