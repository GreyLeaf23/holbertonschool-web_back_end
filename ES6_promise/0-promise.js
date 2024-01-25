export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate API call
    setTimeout(() => {
      const apiResponse = 'API response';
      resolve(apiResponse);
    }, 2000);
  });
}
