import { InjectRedis } from "@nestjs-modules/ioredis";
import { Injectable } from "@nestjs/common";
import { Redis } from "ioredis";

export interface SetCache {
  key: string;
  value: string;
  ttl?: number;
}

export interface GetCache {
  key: string;
  json?: boolean;
}

@Injectable()
export class CacheService {
  constructor(@InjectRedis() private readonly cacheService: Redis) {}

  async get({ key, json }: GetCache) {
    const cached = (await this.cacheService.get(key)) as string;
    if (!cached) return null;
    if (json) return JSON.parse(cached);
    return cached;
  }
  async set({ key, value, ttl }: SetCache) {
    return this.cacheService.set(key, value, "EX", ttl || 10);
  }
  del(key: string) {
    return this.cacheService.del(key);
  }
}
