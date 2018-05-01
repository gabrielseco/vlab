import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class UserDto {
  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}

