import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import envConfig from 'src/env/env.config';
const BCRYPT_ROUNDS = envConfig().BCRYPT_ROUNDS;
@Injectable()
export class BcryptService {
  plainToHash = async (plain: string): Promise<string> => {
    const salt = await bcrypt.genSalt(BCRYPT_ROUNDS);
    const hash = await bcrypt.hash(plain, salt);
    return hash;
  };

  compareHash = async (storedHash: string, toBeChecked: string): Promise<boolean> => {
    return await bcrypt.compare(toBeChecked, storedHash);
  };
}
