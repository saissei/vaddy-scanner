import { VOError } from '../VOErrorHandler';

describe('VOError 正常系', () => {
  it('string test', () => {
    const err = VOError.typeError('test');
    expect(err).toEqual('test');
  });
  it('undefined test', () => {
    const err = VOError.typeError(undefined);
    expect(err).toEqual(undefined);
  });
  it('null test', () => {
    const err = VOError.typeError(null);
    expect(err).toEqual(null);
  });
});
