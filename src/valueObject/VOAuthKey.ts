import { VOError } from './VOErrorHandler';
import { ConsoleMessage } from '../presenter/message';

export class VOAuthKey {
  private authKey: string;
  public static of(authKey: unknown): VOAuthKey | undefined {
    if ( typeof authKey !== 'string'){
      const errorMessage = VOError.typeError('authkey is not found or input data type is not string');
      ConsoleMessage.error(errorMessage);
      return;
    }
    return new VOAuthKey(authKey);
  }
  private constructor(authKey: string){
    this.authKey = authKey;
  }
  public toString(): string {
    return this.authKey;
  }
}
