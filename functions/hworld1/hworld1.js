// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const shared = require("../shared/shared")
exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.name || shared + "1"
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
