import { Injectable } from '@nestjs/common';
@Injectable()
export class Sess1Service {
  hello(): string {
    return 'Hello from ses1 service1';
  }
}
