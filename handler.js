'use strict';
const axios = require('axios')

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
}
module.exports.traceContext = async (event) => {
  await axios.get('<your URL here>')
  return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "sent",
        },
        null,
        2
      ),
    };
}
