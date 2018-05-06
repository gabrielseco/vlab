import * as path from 'path';
import { Get, Controller, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root(@Res() res) {
    res.sendFile(path.resolve('public/index.html'));
  }
}
