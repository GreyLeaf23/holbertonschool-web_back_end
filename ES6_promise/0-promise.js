function getResponseFromAPI() {
  // eslint-disable-next-line
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('true');
      reject(new Error('The fake API is not working currently'));
    });
  });
}
export default getResponseFromAPI;
