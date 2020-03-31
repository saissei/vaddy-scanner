import { VOAuthKey } from '../VOAuthKey';
import sinon from 'sinon';

describe('VOAuth 正常系', () => {
  it('string test', () => {
    const auth = VOAuthKey.of('test');
    if ( auth === undefined) {
      return;
    }
    const id = auth.toString();
    expect(id).toEqual('test');
  });
});

describe('VOAuth 異常系', () => {
  let exit: sinon.SinonStub;
  let logger: sinon.SinonStub;
  beforeEach(() => {
    exit = sinon.stub(process, 'exit');
    logger = sinon.stub(console, 'error');
  });
  afterEach(() => {
    exit.restore();
    logger.restore();
  });

  it('number test', () => {
    VOAuthKey.of(123);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('undefined test', () => {
    VOAuthKey.of(undefined);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('null test', () => {
    VOAuthKey.of(null);
    expect(exit.callCount).toEqual(1);
    expect(logger.calledOnce).toBeTruthy();
  });
  it('array in string test', () => {
    VOAuthKey.of(['test']);
    expect(exit.callCount).toEqual(1);
    expect(logger.calledOnce).toBeTruthy();
  });
  it('array in number test', () => {
    VOAuthKey.of([123]);
    expect(exit.callCount).toEqual(1);
    expect(logger.calledOnce).toBeTruthy();
  });
  it('key-value object test', () => {
    VOAuthKey.of({'key': 'value'});
    expect(exit.callCount).toEqual(1);
    expect(logger.calledOnce).toBeTruthy();
  });
});
