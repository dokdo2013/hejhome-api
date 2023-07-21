import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ApiResponseInterceptor } from './common/api-response.interceptor';
import { ControlModule } from './control/control.module';
import { UserConfigModule } from './config/config.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ControlModule,
    UserConfigModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ApiResponseInterceptor,
    },
  ],
})
export class AppModule {}
