exports.handler = (event, context, callback) => {
  var responseBody = {
    key6: 'value3',
    key5: 'value2',
    key4: 'value1'
  };

  var response = {
    statusCode: 200,
    headers: {
      my_header: 'my_value'
    },
    body: JSON.stringify(responseBody),
    isBase64Encoded: false
  };
  callback(null, response);
};
