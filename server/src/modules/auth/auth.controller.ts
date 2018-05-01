import {
  Controller,
  Post,
  HttpStatus,
  HttpCode,
  Get,
  Body,
  HttpException,
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
    description: API_MESSAGES.AUTH.SIGN_UP,
  })
  public async signup(@Body() userDto: UserDto) {
    try {
      await this.authService.signUser(userDto);
      return await this.authService.createToken(userDto);
    } catch (err) {
      throw new HttpException(err.toString(), HttpStatus.BAD_REQUEST);
    }
  }
}
