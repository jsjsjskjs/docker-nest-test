import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as redisStore from 'cache-manager-ioredis';
import { RedisModule } from '@nestjs-modules/ioredis'

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'redislocal',
      port: 6379,
      password: '6te0valZ2L'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
