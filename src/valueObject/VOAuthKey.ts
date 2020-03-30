import { VOError } from './VOErrorHandler';

export class VOAuthKey {
  private authKey: string;
  public static of(authKey: unknown): VOAuthKey | undefined {
    if ( typeof authKey !== 'string'){
      const errorMessage = VOError.typeError('authkey is not found or input data type is not string');
      console.error(errorMessage);
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
