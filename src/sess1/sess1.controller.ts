import { Controller, Get } from '@nestjs/common';
import { Sess1Service } from './sess1.service';
@Controller('sess1')
export class Sess1Controller {
  constructor(private readonly sess1: Sess1Service) {}
  @Get('')
  hello(): string {
    return this.sess1.hello();
  }
}
