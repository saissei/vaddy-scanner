import { VOError } from './VOErrorHandler';

export class VOSenario {
  private senarioId: number;
  public static of(senarioId: unknown): VOSenario | undefined {
    if (  typeof senarioId !== 'number'){
      const errorMessage = VOError.typeError('projectId is not found or input data type is not string');
      console.error(errorMessage);
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
