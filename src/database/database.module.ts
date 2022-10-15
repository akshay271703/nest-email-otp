import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import envConfig from 'src/env/env.config';
const DB_CONFIG = envConfig().DB_CONFIG;

@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG)]
})
export class DatabaseModule {}
