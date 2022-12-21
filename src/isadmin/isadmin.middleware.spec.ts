import { IsadminMiddleware } from './isadmin.middleware';

describe('IsadminMiddleware', () => {
  it('should be defined', () => {
    expect(new IsadminMiddleware()).toBeDefined();
  });
});
