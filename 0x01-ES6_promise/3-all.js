import { uploadPhoto, createUser } from './utils.js'
export default function handleProfileSignup(){
	return uploadPhoto()
	.then((value) => {let photo = value.body
		createUser()
        .then((data) => {
         let firstName = data.firstName;
          let lastName = data.lastName;
          console.log(`${photo} ${firstName} ${lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}
