import { Injectable } from '@nestjs/common';
import { config, SES } from 'aws-sdk';
import envConfig from 'src/env/env.config';
const AWS_CONFIG = envConfig().AWS_CONFIG;

@Injectable()
export class AWSService {
  sesService: SES;
  constructor() {
    config.update({ region: AWS_CONFIG.region });
    this.sesService = new SES({
      apiVersion: AWS_CONFIG.apiVersion,
      credentials: AWS_CONFIG.credentials,
      region: AWS_CONFIG.region
    });
  }

  sendEmail(params: SES.SendEmailRequest) {
    return this.sesService.sendEmail(params).promise();
  }
}
