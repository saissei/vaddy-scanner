import { Result } from '../result';
import { VOUser } from '../../valueObject/VOUser';
import { VOAuthKey } from '../../valueObject/VOAuthKey';
import { VOScanId } from '../../valueObject/VOScanId';
import { VORequestResultBody } from '../../valueObject/VORequestResultBody';

import sinon from 'sinon';
/* import axios from 'axios'; */

/* eslint-disable @typescript-eslint/camelcase */

const resultSample = {
  data: {
    'status': 'sampleStatus',
    'project_id': 'sampleProjectId',
    'scan_id': 'sampleScanId',
    'scan_count': 1,
    'alert_count': 0,
    'timezone': 'Asia/Tokyo',
    'start_time':  'YYYYMMDDTHH:MM:SSZ',
    'end_time':  'YYYYMMDDTHH:MM:SSZ',
    'scan_result_url': 'https://sampledomain.com',
    'complete': 1,
    'crawl_id': 123,
    'scan_list': ['sample', 'security', 'test']
  }
};

describe('Result nomal test', () => {

  it('test reference function', async () => {
    const user = 'demoUser';
    const auth_key = 'sampleKey';
    const scan_id = 'sampleScanId';
    const vouser = VOUser.of(user);
    const voauth = VOAuthKey.of(auth_key);
    const voscan = VOScanId.of(scan_id);
    const stub = sinon.stub();
    Result.crawl = stub;
    stub.resolves(resultSample.data);
    const reqBody = VORequestResultBody.of(vouser, voauth, voscan);

    const checkResult = await Result.reference(reqBody);
    expect(checkResult).toEqual(resultSample.data);
  });
  it('test reference function with error', async () => {
    const user = 'demoUser';
    const auth_key = 'sampleKey';
    const scan_id = 'sampleScanId';
    const vouser = VOUser.of(user);
    const voauth = VOAuthKey.of(auth_key);
    const voscan = VOScanId.of(scan_id);
    const stub = sinon.stub();
    Result.crawl = stub;
    stub.resolves(undefined);
    const reqBody = VORequestResultBody.of(vouser, voauth, voscan);
    const checkResult = await Result.reference(reqBody);
    expect(checkResult).toBeUndefined();
  });

  /* it('test reference function with error', async () => {

    const user = 'demoUser';
    const auth_key = 'sampleKey';
    const scan_id = 'sampleScanId';
    const vouser = VOUser.of(user);
    const voauth = VOAuthKey.of(auth_key);
    const voscan = VOScanId.of(scan_id);
    resultSample.data.status = 'scanning';
    const vaddy = sinon.stub();
    axios.get = vaddy;
    const respData = Promise.resolve<any>(resultSample);
    vaddy.returns(respData);
    const reqBody = VORequestResultBody.of(vouser, voauth, voscan);
    const res = await Result.crawl(reqBody.toQuery());
    console.log(res);
    const called: boolean = vaddy.withArgs(`https://local.net/v2/scan/result?${reqBody.toQuery()}`).called;
    expect(called).toEqual(true);
  }); */
});
