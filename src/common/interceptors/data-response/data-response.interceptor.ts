import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, map } from 'rxjs';

@Injectable()
export class DataResponseInterceptor implements NestInterceptor {
  constructor(private readonly configService: ConfigService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(this.configService.get('environment.apiVersion'));
    return next.handle().pipe(
      map((data) => ({
        apiVersion: this.configService.get('environment.apiVersion'),
        data: data,
      })),
    );
  }
}
