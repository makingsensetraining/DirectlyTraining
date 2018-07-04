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
        expect(getUserId(user)).toBe('foo');
      });

      it('should return `id` value, when `id` exists and theres no `_id`', () => {
        const user = { id: 'bar' };
        expect(getUserId(user)).toBe('bar');
      });

      it('should return `undefined` if neither `_id` nor `id` exist', () => {
        const user = {};
        expect(getUserId(user)).toBe(undefined);
      });
    });
  });
});