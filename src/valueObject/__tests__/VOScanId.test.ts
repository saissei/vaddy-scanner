import { VOScanId } from '../VOScanId';

describe('VOAuth 正常系', () => {
  it('string test', () => {
    const auth = VOScanId.of('test');
    if ( auth === undefined) {
      return;
    }
    const id = auth.toString();
    expect(id).toEqual('test');
  });
});

describe('VOAuth 異常系', () => {
  it('undefined test', () => {
    const auth = VOScanId.of(undefined);
    expect(auth).toBeUndefined();
  });
  it('null test', () => {
    const auth = VOScanId.of(null);
    expect(auth).toBeUndefined();
  });
});
