import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    // asynchronously uploading a photo
    photo = await uploadPhoto();
    // asynchronously creating a user
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }
  return { photo, user };
}
