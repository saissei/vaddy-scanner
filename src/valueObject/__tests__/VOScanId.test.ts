/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { VOScanId } from '../VOScanId';
import sinon from 'sinon';

describe('VOScanId 正常系', () => {
  it('string test', () => {
    const voscan = VOScanId.of('test');
    if ( voscan === undefined) {
      return;
    }
    const scanId = voscan.toString();
    expect(scanId).toEqual('test');
  });
});

describe('VOScanId 異常系', () => {
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
    // @ts-ignore
    VOScanId.of(123);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('undefined test', () => {
    VOScanId.of(undefined);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('null test', () => {
    VOScanId.of(null);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('array in string test', () => {
    // @ts-ignore
    VOScanId.of(['test']);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('array in number test', () => {
    // @ts-ignore
    VOScanId.of([123]);
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
  it('key-value object test', () => {
    // @ts-ignore
    VOScanId.of({'key': 'value'});
    expect(exit.calledOnce).toBeTruthy();
    expect(logger.calledOnce).toBeTruthy();
  });
});
