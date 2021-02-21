import { ConsoleMessage } from '../message';
import sinon from 'sinon';

describe('ConsoleMessage test', () => {
  let infoLogger: sinon.SinonStub;
  let errorLogger: sinon.SinonStub;
  let logger: sinon.SinonStub;
  beforeEach(() => {
    // @ts-ignore
    logger = sinon.stub(console, 'log');
    // @ts-ignore
    infoLogger = sinon.stub(console, 'info');
    // @ts-ignore
    errorLogger = sinon.stub(console, 'error');
  });
  afterEach(() => {
    logger.restore();
    errorLogger.restore();
    infoLogger.restore();
  });

  it('tests of string at info logger', () => {
    ConsoleMessage.info('test');
    expect(infoLogger.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('tests of string at success logger', () => {
    ConsoleMessage.success('test');
    expect(infoLogger.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('tests of string at error logger', () => {
    ConsoleMessage.error('test');
    expect(errorLogger.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
});
