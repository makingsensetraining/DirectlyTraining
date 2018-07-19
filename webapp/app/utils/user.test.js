import { getUserId } from './user';

describe('User Util', () => {
  describe('getUserId', () => {
    it('should be defined', () => {
      expect(getUserId).toBeDefined();
    });

    it('should be a function', () => {
      expect(getUserId).toEqual(expect.any(Function));
    });

    describe('User id property fallback', () => {
      it('should return `_id` value, if `_id` exists', () => {
        const user = { _id: 'foo'};

        const result = getUserId(user);

        expect(result).toBe('foo');
      });

      it('should return `id` value, when `id` exists and theres no `_id`', () => {
        const user = { id: 'bar' };

        const result = getUserId(user);

        expect(result).toBe('bar');
      });

      it('should return `undefined` if neither `_id` nor `id` exist', () => {
        const user = {};

        const result = getUserId(user);

        expect(result).toBe(undefined);
      });

      it('should return `undefined` if undefined is passed in', () => {
        const result = getUserId(undefined);

        expect(result).toBe(undefined);
      });
    });
  });
});
