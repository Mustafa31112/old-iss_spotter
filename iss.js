
const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
 const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body);

    callback(null, { latitude, longitude });
  });
};

// Don't need to export the other function since we are not testing it right now.
module.exports = { fetchCoordsByIP };

  // if (error) {
  //   callback(error, null);
  //   return;
  // }
  // // if non-200 status, assume server error
  // if (response.statusCode !== 200) {
  //   const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
  //   callback(Error(msg), null);
  //   return;
  // }


module.exports = { fetchMyIP };