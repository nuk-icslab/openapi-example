const EchoTestClient = require("echo-test-client");

const serverUrl = "http://127.0.0.1:3000";
const myApiClient = new EchoTestClient.ApiClient(serverUrl);
var api = new EchoTestClient.DefaultApi(myApiClient);

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(
      "API called successfully. Returned data: \n" + JSON.stringify(data, "", 2)
    );
  }
};
api.echoTestV1PingGet(callback);
