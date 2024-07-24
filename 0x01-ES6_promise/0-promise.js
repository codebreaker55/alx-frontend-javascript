export default function getResponseFromAPI() {
  const resp = true;
  return new Promise((resolve, reject) => {
    if (resp) {
      resolve();
    } else {
      reject();
    }
  });
}
