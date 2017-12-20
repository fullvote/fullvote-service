const { getWinner } = require('fullvote');

exports.handler = (event, context, callback) => {
  const ballots = event && event.body && event.body.ballots;
  if (!ballots) {
    callback(null, {
      statusCode: 400,
      headers: {},
      body: JSON.stringify({
        error: 'No ballots provided'
      }),
      isBase64Encoded: false
    });
  } else {
    const winnerObject = getWinner(event.body.ballots);
    callback(null, {
      statusCode: 200,
      headers: {},
      body: JSON.stringify(winnerObject),
      isBase64Encoded: false
    });
  }
};
