import sinon from 'sinon';
import dotenv from 'dotenv';
import { VOScanBody, ScanBody } from '../VOScanBody';
import { VOUser } from '../VOUser';
import { VOAuthKey } from '../VOAuthKey';
import { VOConfig } from '../VOConfig';
import { VOProject } from '../VOProject';
import { VOSenario } from '../VOSenario';

describe('VOScanBody 正常系', () => {
  /* eslint-disable @typescript-eslint/camelcase */
  const user = 'demoUser';
  const auth_key = 'sampleKey';
  const project = 'sampleProject';
  const senario = 123;
  const vouser = VOUser.of(user);
  const voauth = VOAuthKey.of(auth_key);
  const voproject = VOProject.of(project);
  const vosenario = VOSenario.of(senario);
  const expectationNormal: ScanBody = {
    action: 'start',
    user: user,
    'auth_key': auth_key,
    'project_id': project
  };
  const expectationSenario: ScanBody = {
    action: 'start',
    user: user,
    'auth_key': auth_key,
    'project_id': project,
    'crawl_id': senario
  };

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

  it('input command line option not include senario', () => {
    const body = VOScanBody.of(vouser, voauth, voproject);
    const voScanBody = body.toJson();
    expect(voScanBody).toEqual(expectationNormal);
  });

  it('input command line option include senario', () => {
    const body = VOScanBody.of(vouser, voauth, voproject, vosenario);
    const voScanBody = body.toJson();
    expect(voScanBody).toEqual(expectationSenario);
  });

  it('input config file include senario', () => {
    process.env.user = 'demoUser';
    process.env.key = 'sampleKey';
    process.env.projectId = 'sampleScanId';
    process.env.crawlId = '123';

  const voconfig = VOConfig.load('.env.test1');
  const body = VOScanBody.ofConfig(voconfig);
    const voScanBody = body.toJson();
    expectationSenario['project_id'] = 'sampleScanId';
    expect(voScanBody).toEqual(expectationSenario);
    process.env.user = '';
    process.env.key = '';
    process.env.projectId = '';
    process.env.crawlId = '';
  });

  it('input config file not include senario', () => {
    process.env.user = 'demoUser';
    process.env.key = 'sampleKey';
    process.env.projectId = 'sampleScanId';
    process.env.crawlId = undefined;
    const voconfig2 = VOConfig.load('.env.test2');
    const body = VOScanBody.ofConfig(voconfig2);
    const voScanBody = body.toJson();
    expectationNormal['project_id'] = 'sampleScanId';
    expect(voScanBody).toEqual(expectationNormal);
    process.env.user = '';
    process.env.key = '';
    process.env.projectId = '';
    process.env.crawlId = '';
  });
});
