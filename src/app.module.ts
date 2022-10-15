import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AwsModule } from './aws/aws.module';
import { AWSService } from './aws/aws.service';
import { MetricsModule } from './config/metrics/metrics.module';
import { DatabaseModule } from './database/database.module';
import { BcryptService } from './services/bcrypt.service';
import { OTPService } from './services/otp.service';
import { UserModule } from './user/user.module';
import { AppInterceptor } from './utilities/interceptors/app.interceptor';

@Module({
  imports: [DatabaseModule, AwsModule, UserModule, MetricsModule],
  controllers: [],
  providers: [
    OTPService,
    AWSService,
    BcryptService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AppInterceptor
    }
  ]
})
export class AppModule {}
