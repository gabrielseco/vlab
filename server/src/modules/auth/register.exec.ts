import axios from 'axios';
import * as dotenv from 'dotenv';
import { IUser } from './user.interface';
import { Prompt } from './../../core/prompt';

dotenv.config();

main();

function main() {
  const user: IUser = {} as any;
  Prompt.ask('Usuario: ')
    .then(answerUsername => {
      user.username = answerUsername.trim();
      return Prompt.ask('Contraseña: ', { type: 'password' });
    })
    .then(answerPassword => {
      user.password = answerPassword.trim();
      createUser(user);
    });
}

function createUser(user: IUser) {
  const URL = process.env.URL + '/auth/signup';
  axios
    .post(URL, user)
    .then(response => {
      console.log('response', response.data);
    })
    .catch(error => console.log(error));
}
