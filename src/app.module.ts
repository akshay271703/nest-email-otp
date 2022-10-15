import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwsModule } from './aws/aws.module';
import { AWSService } from './aws/aws.service';
import { DatabaseModule } from './database/database.module';
import { User } from './database/entities/user.entity';
import { BcryptService } from './services/bcrypt.service';
import { OTPService } from './services/otp.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, AwsModule, UserModule, TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [OTPService, AWSService, BcryptService]
})
export class AppModule {}
