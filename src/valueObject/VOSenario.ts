import { VOError } from './VOErrorHandler';
import { ConsoleMessage } from '../presenter/message';

export class VOSenario {
  private senarioId: number;
  public static of(senarioId: unknown): VOSenario | undefined {
    if (  typeof senarioId !== 'number'){
      const errorMessage = VOError.typeError('projectId is not found or input data type is not string');
      ConsoleMessage.error(errorMessage);
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
