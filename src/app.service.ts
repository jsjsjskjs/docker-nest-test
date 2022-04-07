import { InjectRedis, Redis } from '@nestjs-modules/ioredis';
import { Inject, Injectable, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly redis: Cache) {}
  async getHello(): Promise<string> {
    const countNum: number = await this.redis.get('number')
    console.log('countNum check', countNum);
    if (countNum !== 0 && countNum !== null) {
      const updatedNum = await this.redis.set('number', countNum + 1);
      console.log('update', updatedNum);
      return '숫자가 1씩 올라갑니다! 숫자: ' + countNum;
    } else {
      await this.redis.set('number', 1);
      return '숫자가 1씩 올라갑니다! 숫자: ' + 0;
    }
  }
}
