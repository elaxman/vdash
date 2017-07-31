const Request = require('request');
var Events = require('./Events.js');

exports.events = function (req, res) {
  Request.get('http://localhost:3000/events', function (error, response, body) {
	if (error) {
		console.log(error) ;
	}
  const data = JSON.parse(body);
  res.json(data);
  console.log(data);
});

};

exports.event = function (req, res) {
  const eventid = encodeURIComponent(req.param.eventId);
//   res.json(Events[req.param.eventId]);
  Request.get(`http://localhost:3000/event/${eventid}`, function(error, response, body) {
	if (error) {
		console.log(error) ;
	}
       const data = JSON.parse(body);
       res.json(data);
       console.log(data);
  });
//   res.json(Events[req.param.eventId]);
//   console.log("Event declaration ..");
//   console.log(req.param.eventId);
//   console.log(Events[req.param.eventId]);
};
