import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Sess1Service } from './sess1.service';
@Controller('sess1')
export class Sess1Controller {
  constructor(private readonly sess1: Sess1Service) {}
  @Get('')
  hello() {
    return this.sess1.hello();
  }
  @Get('/:id')
  pipe(@Param('id', ParseIntPipe) id: number) {
    return this.sess1.pipe(id);
  }
}
