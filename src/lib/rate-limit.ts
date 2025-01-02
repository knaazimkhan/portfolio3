type RateLimitStore = {
  [key: string]: {
    count: number;
    lastAttempt: number;
  };
};

const store: RateLimitStore = {};

export class RateLimit {
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 3, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  check(key: string): { success: boolean; timeLeft?: number } {
    const now = Date.now();
    const record = store[key];

    if (!record) {
      store[key] = { count: 1, lastAttempt: now };
      return { success: true };
    }

    const timePassed = now - record.lastAttempt;
    if (timePassed > this.windowMs) {
      store[key] = { count: 1, lastAttempt: now };
      return { success: true };
    }

    if (record.count >= this.maxAttempts) {
      const timeLeft = Math.ceil((this.windowMs - timePassed) / 1000);
      return { success: false, timeLeft };
    }

    record.count += 1;
    record.lastAttempt = now;
    return { success: true };
  }

  reset(key: string): void {
    delete store[key];
  }
} 