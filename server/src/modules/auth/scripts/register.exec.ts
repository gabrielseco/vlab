import axios from 'axios';
import * as dotenv from 'dotenv';
import { IUser } from './../user.interface';
import { Prompt } from './../../../core/prompt';

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
      return Prompt.ask('Password secreta: ', { type: 'password' });
    })
    .then(answerSecretPassword => {
      if (answerSecretPassword.trim() === process.env.SECRET_AUTH_KEY) {
        createUser(user);
      } else {
        throw new Error('Password secreta incorrecta');
      }
    });
}

function createUser(user: IUser) {
  const URL = process.env.URL + '/auth/signup';
  axios
    .post(URL, user)
    .then(response => {
      console.log(`\nEl usuario ${user.username} ha sido creado`);
    })
    .catch(error => console.log(error));
}
