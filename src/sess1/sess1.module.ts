import { Module } from '@nestjs/common';
import { Sess1Controller } from './sess1.controller';
import { Sess1Service } from './sess1.service';

@Module({
  controllers: [Sess1Controller],
  providers: [Sess1Service],
  exports: [Sess1Service],
})
export class Sess1Module {}
