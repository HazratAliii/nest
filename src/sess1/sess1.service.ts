import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
@Injectable()
export class Sess1Service {
  hello() {
    try {
      // await this.service.findAll();
      console.log('Hi');
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
  pipe(id: number) {
    console.log(id);
  }
}
