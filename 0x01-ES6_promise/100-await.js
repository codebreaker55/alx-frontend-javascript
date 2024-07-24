import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  // asynchronously uploading a photo
  const photo = await uploadPhoto();
  let user;
  try {
    // asynchronously creating a user
    user = await createUser();
  } catch (err) {
    photo = null;
    user = null;
  }
  return { photo, user };
}
