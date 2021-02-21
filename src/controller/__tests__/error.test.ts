import { ErrorSwitcher } from '../error';
import sinon from 'sinon';

describe('ErrorSwitcher Normal', () => {
  let exit: sinon.SinonStub;
  let logger: sinon.SinonStub;
  beforeEach(() => {
    // @ts-ignore
    exit = sinon.stub(process, 'exit');
    // @ts-ignore
    logger = sinon.stub(console, 'error');
  });
  afterEach(() => {
    exit.restore();
    logger.restore();
  });
  it('handler test', () => {
    ErrorSwitcher.handle('test');
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
});
