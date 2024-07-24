import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const res = [];
    for (const val of values) {
      res.push({ status: val.status, value: val.value || val.reason });
    }
    return res;
  });
}
