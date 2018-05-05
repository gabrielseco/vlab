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
      return Prompt.ask('Nueva Contraseña: ', { type: 'password' });
    })
    .then(answerPassword => {
      user.password = answerPassword.trim();
      return Prompt.ask('Password secreta: ', { type: 'password' });
    })
    .then(answerSecretPassword => {
      if (answerSecretPassword.trim() === process.env.SECRET_AUTH_KEY) {
        changePassword(user);
      } else {
        throw new Error('Password secreta incorrecta');
      }
    });
}

function changePassword(user: IUser) {
  const URL = process.env.URL + '/auth/change-password';
  axios
    .post(URL, user)
    .then(response => {
      console.log('\nLa contraseña ha sido cambiada');
    })
    .catch(error => console.log(error));
}
