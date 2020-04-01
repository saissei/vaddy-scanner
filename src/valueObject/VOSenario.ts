import { ErrorSwitcher } from '../controller/error';

export class VOSenario {
  private senarioId: string;
  public static of(senarioId: unknown): VOSenario | undefined {
    if (  typeof senarioId !== 'string'){
      ErrorSwitcher.handle('senarioId is not found or input data type is not string');
      return;
    }
    return new VOSenario(senarioId);
  }
  private constructor(senarioId: string){
    this.senarioId = senarioId;
  }
  public toString(): string {
    return this.senarioId;
  }
  public toNumber(): number {
    return Number(this.senarioId);
  }
}
