import { Module } from '@nestjs/common';
import { AWSService } from './aws.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AWSService],
  exports: [AWSService]
})
export class AwsModule {}
