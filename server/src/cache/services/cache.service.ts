import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";

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
  constructor(@Inject(CACHE_MANAGER) private readonly cacheService: Cache) {}

  async get({ key, json }: GetCache) {
    const cached = (await this.cacheService.get(key)) as string;
    if (!cached) return null;
    if (json) return JSON.parse(cached);
    return cached;
  }
  async set({ key, value, ttl }: SetCache) {
    return this.cacheService.set(key, value, ttl || 10_000);
  }
  del(key: string) {
    return this.cacheService.del(key);
  }
}
