import { Injectable } from '@nestjs/common';
import { generate } from 'otp-generator';
import envConfig from 'src/env/env.config';
import { IOtpConfig } from 'src/interfaces/config.interface';
const OTP_CONFIG = envConfig().OTP_CONFIG;

@Injectable()
export class OTPService {
  config: IOtpConfig;
  constructor() {
    this.config = OTP_CONFIG;
  }

  generateOTP(): string {
    return generate(this.config.minLength, { ...this.config });
  }
}
