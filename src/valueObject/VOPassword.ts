import { VOError } from './VOErrorHandler';
import { ConsoleMessage } from '../presenter/message';

export class VOPassword {
  private password: string;
  public static of(password: unknown): VOPassword | undefined {
    if ( typeof password !== 'string'){
      const errorMessage = VOError.typeError('password is not found or input data type is not string');
      ConsoleMessage.error(errorMessage);
      return;
    }
    return new VOPassword(password);
  }
  private constructor(password: string){
    this.password = password;
  }
  public toString(): string {
    return this.password;
  }
}
