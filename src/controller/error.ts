import { VOError } from '../valueObject/VOErrorHandler';
import { ConsoleMessage } from '../presenter/message';

export class ErrorSwitcher {
  public static handle(message: string): void {
    const errMessage = VOError.typeError(message);
    ConsoleMessage.error(errMessage);
    process.exit(1);
  }
}
