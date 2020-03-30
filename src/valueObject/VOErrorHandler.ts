export class VOError {
  public static typeError(message: string): TypeError {
    const error = new TypeError(message);
    return error;
  }
}
