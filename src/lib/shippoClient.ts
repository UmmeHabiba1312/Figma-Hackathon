// Use require instead of import for CommonJS modules
const Shippo = require('shippo');

const shippoApiKey = process.env.NEXT_PUBLIC_SHIPPO_TEST_TOKEN;

if (!shippoApiKey) {
  throw new Error('Shippo API key is missing. Please check your environment variables.');
}

console.log('Shippo API Key:', shippoApiKey); // Log the API key for debugging

const shippoClient = Shippo(shippoApiKey);
export default shippoClient;