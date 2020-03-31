import { VOConfig, UserInfo } from '../VOConfig';

describe('VOConfig 正常系', () => {
  it('test pattern if envflile includes crawlId', () => {
    const conf = VOConfig.load('.env.test1');
    const configJson = conf.toJson();
    const expectation: UserInfo = {
      user: 'demoUser',
      'auth_key': 'sampleKey',
      'project_id': 'sampleScanId',
      'crawl_id': 123
    };
    expect(configJson).toEqual(expectation);
  });
  it('test pattern if envflile not includes crawlId', () => {
    const conf = VOConfig.load('.env.test2');
    const configJson = conf.toJson();
    const expectation: UserInfo = {
      user: 'demoUser',
      'auth_key': 'sampleKey',
      'project_id': 'sampleScanId'
    };
    expect(configJson).toEqual(expectation);
  });
});

describe('VOConfig 異常系', () => {
  it('test pattern if envflile not includes userId', () => {
    const conf = VOConfig.load('.env.error1');
    expect(conf).toBeUndefined();
  });
  it('test pattern if envflile not includes apiKey', () => {
    const conf = VOConfig.load('.env.error2');
    expect(conf).toBeUndefined();
  });
  it('test pattern if envflile not includes projectId', () => {
    const conf = VOConfig.load('.env.error3');
    expect(conf).toBeUndefined();
  });
});
