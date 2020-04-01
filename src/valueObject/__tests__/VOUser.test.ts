import { VOUser } from '../VOUser';
import sinon from 'sinon';

describe('VOUser 正常系', () => {
  it('string test', () => {
    const vouser = VOUser.of('demouser');
    if ( vouser === undefined) {
      return;
    }
    const user = vouser.toString();
    expect(user).toEqual('demouser');
  });
});

describe('VOUser 異常系', () => {
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
    VOUser.of(123);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('undefined test', () => {
    VOUser.of(undefined);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('null test', () => {
    VOUser.of(null);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('array in string test', () => {
    VOUser.of(['test']);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('array in number test', () => {
    VOUser.of([123]);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('key-value object test', () => {
    VOUser.of({'key': 'value'});
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
});
