import { VOProject } from '../VOProject';
import sinon from 'sinon';

describe('VOAuth 正常系', () => {
  it('string test', () => {
    const auth = VOProject.of('test');
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
    VOProject.of(123);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('undefined test', () => {
    VOProject.of(undefined);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('null test', () => {
    VOProject.of(null);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('array in string test', () => {
    VOProject.of(['test']);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('array in number test', () => {
    VOProject.of([123]);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('key-value object test', () => {
    VOProject.of({'key': 'value'});
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
});
