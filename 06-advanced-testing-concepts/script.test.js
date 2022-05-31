import { it } from 'vitest';
import { generateToken } from './script';

it('should generate a token value', () => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (err, token) => {
        expect(token).toBeDefined();
    });
});