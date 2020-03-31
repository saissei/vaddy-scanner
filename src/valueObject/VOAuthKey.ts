import { ErrorSwitcher } from '../controller/error';

export class VOAuthKey {
  private authKey: string;
  public static of(authKey: unknown): VOAuthKey | undefined {
    if ( typeof authKey !== 'string'){
      ErrorSwitcher.handle('authkey is not found or input data type is not string');
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
