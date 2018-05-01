import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { Constants } from '../../constants';
import { IUser } from './user.interface';

@Component()
export class AuthService {

  constructor(
    @Inject(Constants.UserRepositoryToken) private readonly userRepository: Repository<IUser>,
  ) {}

  async signUser(user: UserDto) {
    try {
      const newUser = {
        ...user,
        password: bcrypt.hashSync(user.password, 10)
      }
      await this.userRepository.save(newUser);
    } catch (error) {
      console.log('error creating user', error);
    }
  }

  async createToken(userDto: UserDto) {
    const expiresIn = 60 * 60,
      secretOrKey = 'secret';
    const user = { email: userDto.username };
    const token = jwt.sign(user, secretOrKey, { expiresIn });
    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    // put some validation logic here
    // for example query user by id / email / username
    return true;
  }
}