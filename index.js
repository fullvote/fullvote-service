const { getWinner } = require('fullvote');

exports.handler = (event, context, callback) => {
  let ballots;
  try {
    ballots = JSON.parse(event.body).ballots;
  } catch (err) {}
  if (!ballots) {
    callback(null, {
      statusCode: 400,
      headers: {},
      body: JSON.stringify({
        // todo, replace blah with link to json scheme
        error: 'No ballots provided. JSON scheme should be blah.'
      }),
      isBase64Encoded: false
    });
  } else {
    const winnerObject = getWinner(ballots);
    callback(null, {
      statusCode: 200,
      headers: {},
      body: JSON.stringify(winnerObject),
      isBase64Encoded: false
    });
  }
};
