import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { Constants } from '../../constants';
import { IUser } from './user.interface';
import { API_MESSAGES } from '../../core/api_messages';

@Component()
export class AuthService {
  constructor(
    @Inject(Constants.UserRepositoryToken)
    private readonly userRepository: Repository<IUser>
  ) {}

  async signUser(user: UserDto) {
    try {
      const newUser = {
        ...user,
        password: bcrypt.hashSync(user.password, 10)
      };
      await this.userRepository.save(newUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(userDto: UserDto) {
    const user = await this.userRepository.findOne({
      username: userDto.username
    });

    if (user) {
      const comparePasswords = await bcrypt.compare(
        userDto.password,
        user.password
      );
      if (!comparePasswords) {
        throw new Error(API_MESSAGES.AUTH.LOGIN.INVALID_PASSWORD);
      }
    } else {
      throw new Error(API_MESSAGES.AUTH.LOGIN.USER_NOT_FOUND);
    }
  }

  async changePassword(userDto: UserDto) {
    const user = await this.userRepository.findOne({
      username: userDto.username
    });

    if (user) {
      const newUser = {
        ...user,
        password: bcrypt.hashSync(userDto.password, 10)
      };

      await this.userRepository.updateById(user.id, newUser);
    } else {
      throw new Error(API_MESSAGES.AUTH.LOGIN.USER_NOT_FOUND);
    }
  }

  async createToken(userDto: UserDto) {
    const expiresIn = 60 * 60,
      secretOrKey = 'secret';
    const user = { email: userDto.username };
    const token = jwt.sign(user, secretOrKey, { expiresIn });
    return {
      expires_in: expiresIn,
      token: token
    };
  }
}
