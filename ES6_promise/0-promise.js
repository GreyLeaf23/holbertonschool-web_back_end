/* eslint-disable */

function getResponseFromAPI () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Got a response from the API');
        });
    });
  }
  export default getResponseFromAPI;
