# APIGW Trace Demo
1. `npm install -g serverless`
2. `npm install`
3. `DD_API_KEY=<your key> sls deploy`
4. Take the `hello` URL from this deploy and paste it into `handler.js`
5. `DD_API_KEY=<your key> sls deploy`
6. See the trace payloads and connected traces in your datadog account, under `apigw-trace-demo` application
