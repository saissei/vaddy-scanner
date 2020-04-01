import { VOSenario } from '../VOSenario';
import sinon from 'sinon';

describe('VOSenario 正常系', () => {
  it('string test', () => {
    const senario = VOSenario.of('123');
    if ( senario === undefined) {
      return;
    }
    const id = senario.toString();
    expect(id).toEqual('123');
  });
  it('string test', () => {
    const senario = VOSenario.of('123');
    if ( senario === undefined) {
      return;
    }
    const id = senario.toNumber();
    expect(id).toEqual(123);
  });
});

describe('VOSenario 異常系', () => {
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
    VOSenario.of(123);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('undefined test', () => {
    VOSenario.of(undefined);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('null test', () => {
    VOSenario.of(null);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('array in string test', () => {
    VOSenario.of(['test']);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('array in number test', () => {
    VOSenario.of([123]);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('key-value object test', () => {
    VOSenario.of({'key': 'value'});
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
});
