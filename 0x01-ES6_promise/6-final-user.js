import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName).then(userInfo) => ({
    status: 'fulfilled',
    value: userInfo,
  }));

  const photo = await uploadPhoto(fileName).catch((e) => ({
    status: 'rejected',
    value: e.toString(),
  }));

  return Promise.resolve([user, photo]);
}
