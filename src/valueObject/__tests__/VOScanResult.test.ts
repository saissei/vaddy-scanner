import { VOScanResult, ScanResult } from '../VOScanResult';

const resultSampleNormal: ScanResult = {
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
};
const resultSampleProblem: ScanResult = {
  'status': 'sampleStatus',
  'project_id': 'sampleProjectId',
  'scan_id': 'sampleScanId',
  'scan_count': 1,
  'alert_count': 1,
  'timezone': 'Asia/Tokyo',
  'start_time':  'YYYYMMDDTHH:MM:SSZ',
  'end_time':  'YYYYMMDDTHH:MM:SSZ',
  'scan_result_url': 'https://sampledomain.com',
  'complete': 1,
  'crawl_id': 123,
  'scan_list': ['sample', 'security', 'test']
};

describe('VOScanResult 正常系', () => {
  it('test without alerts', () => {
    const scanResult = VOScanResult.of(resultSampleNormal);
    expect(scanResult.securityProblem()).toBeFalsy();
    expect(scanResult.extractScanList()).toEqual(resultSampleNormal.scan_list);
    expect(scanResult.extractResultUrl()).toEqual(resultSampleNormal.scan_result_url);
  });
  it('test include alerts', () => {
    const scanResult = VOScanResult.of(resultSampleProblem);
    expect(scanResult.securityProblem()).toBeTruthy();
    expect(scanResult.extractScanList()).toEqual(resultSampleNormal.scan_list);
    expect(scanResult.extractResultUrl()).toEqual(resultSampleNormal.scan_result_url);
  });
});
