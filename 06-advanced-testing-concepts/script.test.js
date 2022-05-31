import { it } from 'vitest';
import { generateToken } from './script';

it('should generate a token value', () =>
  new Promise((done) => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (err) {
        done(err);
      }
    });
  }));
