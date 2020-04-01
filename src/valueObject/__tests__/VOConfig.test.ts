import { VOConfig, UserInfo } from '../VOConfig';
import sinon from 'sinon';
import dotenv from 'dotenv';

describe('VOConfig 正常系', () => {
  let env: sinon.SinonStub;
  let value: sinon.SinonStub;
  beforeEach(() => {
    env = sinon.stub(dotenv, 'config');
    value = sinon.stub(process, 'env');
  });
  afterEach(() => {
    env.restore();
    value.restore();
  });

  it('test pattern if envflile includes crawlId', () => {
    process.env.user = 'demoUser';
    process.env.key = 'sampleKey';
    process.env.projectId = 'sampleScanId';
    process.env.crawlId = '123';

    const conf = VOConfig.load('.env.test1');
    const configJson = conf.toJson();
    const expectation: UserInfo = {
      user: 'demoUser',
      'auth_key': 'sampleKey',
      'project_id': 'sampleScanId',
      'crawl_id': 123
    };
    expect(configJson).toEqual(expectation);
    process.env.user = '';
    process.env.key = '';
    process.env.projectId = '';
    process.env.crawlId = '';
  });
  it('test pattern if envflile not includes crawlId', () => {
    process.env.user = 'demoUser';
    process.env.key = 'sampleKey';
    process.env.projectId = 'sampleScanId';
    process.env.crawlId = undefined;

    const conf = VOConfig.load('.env.test2');
    const configJson = conf.toJson();
    const expectation: UserInfo = {
      user: 'demoUser',
      'auth_key': 'sampleKey',
      'project_id': 'sampleScanId'
    };
    expect(configJson).toEqual(expectation);
    process.env.user = '';
    process.env.key = '';
    process.env.projectId = '';
    process.env.crawlId = '';
  });
});

describe('VOConfig 異常系', () => {
  let env: sinon.SinonStub;
  beforeEach(() => {
    env = sinon.stub(dotenv, 'config');
  });
  afterEach(() => {
    env.restore();
  });

  it('test pattern if envflile not includes userId', () => {
    process.env.user = 'undefined';
    const conf = VOConfig.load('.env.error1');
    expect(conf).toBeUndefined();
    process.env.user = '';
  });
  it('test pattern if envflile not includes apiKey', () => {
    process.env.user = 'demoUser';
    process.env.key = 'undefined';
    const conf = VOConfig.load('.env.error2');
    expect(conf).toBeUndefined();
    process.env.user = '';
    process.env.key = '';
  });
  it('test pattern if envflile not includes projectId', () => {
    process.env.user = 'demoUser';
    process.env.key = 'sampleKey';
    process.env.projectId = 'undefined';
    const conf = VOConfig.load('.env.error3');
    expect(conf).toBeUndefined();
    process.env.user = '';
    process.env.key = '';
    process.env.projectId = '';
  });
});
