import {
  Controller,
  Post,
  HttpStatus,
  HttpCode,
  Get,
  Body,
  HttpException,
  Put
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDto } from './user.dto';
import { API_MESSAGES } from '../../core/api_messages';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: API_MESSAGES.AUTH.SIGN_UP
  })
  public async signUp(@Body() userDto: UserDto) {
    try {
      await this.authService.signUser(userDto);
      return await this.authService.createToken(userDto);
    } catch (err) {
      throw new HttpException(err.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  @ApiResponse({
    status: HttpStatus.OK,
    description: API_MESSAGES.AUTH.LOGIN.DESCRIPTION
  })
  public async login(@Body() userDto: UserDto) {
    try {
      await this.authService.login(userDto);
      return await this.authService.createToken(userDto);
    } catch (err) {
      throw new HttpException(err.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  @Post('change-password')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: API_MESSAGES.AUTH.LOGIN.CHANGE_PASSWORD
  })
  public async changePassword(@Body() changePasswordDto: UserDto) {
    try {
      return await this.authService.changePassword(changePasswordDto);
    } catch (err) {
      throw new HttpException(err.toString(), HttpStatus.BAD_REQUEST);
    }
  }
}
