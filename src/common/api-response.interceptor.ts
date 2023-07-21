import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonResponse, Response200, Response201 } from './api-response.dto';

@Injectable()
export class ApiResponseInterceptor<T>
  implements NestInterceptor<T, CommonResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<CommonResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        const status = context.switchToHttp().getResponse().statusCode;

        if (status === 200) {
          const response: Response200<T> = {
            status,
            message: 'success',
            data,
          };
          return response;
        } else if (status === 201) {
          const response: Response201<T> = {
            status,
            message: 'success',
            data,
          };
          return response;
        } else {
          // just return data if status code is not 200 or 201
          return data;
        }
      }),
    );
  }
}
