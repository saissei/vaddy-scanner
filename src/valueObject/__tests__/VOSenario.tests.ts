import { VOSenario } from '../VOSenario';

describe('VOSenario tests', () => {
  it('正常系', () => {
    const senario = VOSenario.of(123);
    if ( senario === undefined) {
      return;
    }
    const id = senario.toNumber();
    expect(id).toEqual(123);
  });
});
