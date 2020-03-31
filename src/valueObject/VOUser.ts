import { ErrorSwitcher } from '../controller/error';

export class VOUser {
  private userId: string;
  public static of(userId: unknown): VOUser | undefined {
    if ( typeof userId !== 'string'){
      ErrorSwitcher.handle('authkey is not found or input data type is not string');
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
