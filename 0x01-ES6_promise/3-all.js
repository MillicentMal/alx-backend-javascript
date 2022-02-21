import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((value) => {
      const photo = value.body;
      createUser()
        .then((data) => {
          const { firstName } = data;
          const { lastName } = data;
          console.log(`${photo} ${firstName} ${lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}
