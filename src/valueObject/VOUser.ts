import { VOError } from './VOErrorHandler';

export class VOUser {
  private userId: string;
  public static of(userId: unknown): VOUser | undefined {
    if ( typeof userId !== 'string'){
      const errorMessage = VOError.typeError('authkey is not found or input data type is not string');
      console.error(errorMessage);
      return;
    }
    return new VOUser(userId);
  }
  private constructor(userId: string){
    this.userId = userId;
  }
  public toString(): string {
    return this.userId;
  }
}
