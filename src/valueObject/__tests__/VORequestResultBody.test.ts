import { VOUser } from '../VOUser';
import { VOAuthKey } from '../VOAuthKey';
import { VOScanId } from '../VOScanId';
import { VORequestResultBody, RequestBody } from '../VORequestResultBody';
import { VOConfig } from '../VOConfig';



describe('VORequestResultBody 正常系', () => {
  /* eslint-disable @typescript-eslint/camelcase */
  const user = 'demoUser';
  const auth_key = 'sampleKey';
  const scan_id = 'sampleScanId';
  const vouser = VOUser.of(user);
  const voauth = VOAuthKey.of(auth_key);
  const voscan = VOScanId.of(scan_id);
  const expectation: RequestBody = {
    user, auth_key, scan_id
  };

  const voconfig = VOConfig.load('.env.test1');
  const expectationQuery = `user=${user}&auth_key=${auth_key}&scan_id=${scan_id}`;

  it('コマンドラインからの設定', () => {
    const reqBody = VORequestResultBody.of(vouser, voauth, voscan);
    const resultJson = reqBody.toJson();
    const resultQuery = reqBody.toQuery();
    expect(resultJson).toEqual(expectation);
    expect(resultQuery).toEqual(expectationQuery);
  });
  it('コンフィグからの設定', () => {
    const reqBody = VORequestResultBody.ofConfig(voconfig, voscan );
    const resultJson = reqBody.toJson();
    const resultQuery = reqBody.toQuery();
    expect(resultJson).toEqual(expectation);
    expect(resultQuery).toEqual(expectationQuery);
  });
});
