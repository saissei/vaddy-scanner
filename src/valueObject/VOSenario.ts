import { ErrorSwitcher } from '../controller/error';

export class VOSenario {
  private senarioId: number;
  public static of(senarioId: unknown): VOSenario | undefined {
    if (  typeof senarioId !== 'number'){
      ErrorSwitcher.handle('projectId is not found or input data type is not string');
      return;
    }
    return new VOSenario(senarioId);
  }
  private constructor(senarioId: number){
    this.senarioId = senarioId;
  }
  public toNumber(): number {
    return this.senarioId;
  }
}
