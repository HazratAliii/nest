import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Sess1Module } from './sess1/sess1.module';

@Module({
  imports: [Sess1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
