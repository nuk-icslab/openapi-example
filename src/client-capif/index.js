const EchoTestClient = require("echo-test-client");
const { discoverApi } = require("capif-invkr");

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(
      "API called successfully. Returned data: \n" + JSON.stringify(data, "", 2)
    );
  }
};

(async function () {
  let apiInfo = await discoverApi("echo-test");
  let serverUrl = `http://${apiInfo["domain"]}`;
  console.log(`API discovered. URL: ${JSON.stringify(serverUrl, "", 2)}`);

  const myApiClient = new EchoTestClient.ApiClient(serverUrl);
  var api = new EchoTestClient.DefaultApi(myApiClient);

  api.echoTestV1PingGet(callback);
})();
