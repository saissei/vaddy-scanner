import { VOError } from '../VOErrorHandler';

describe('VOError 正常系', () => {
  it('string test', () => {
    const err = VOError.typeError('test');
    expect(err).toEqual(new TypeError('test'));
  });
  it('undefined test', () => {
    const err = VOError.typeError(undefined);
    expect(err).toEqual(new TypeError(undefined));
  });
  it('null test', () => {
    const err = VOError.typeError(null);
    expect(err).toEqual(new TypeError(null));
  });
});
