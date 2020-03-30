/* const black   = '\u001b[30m'; */
const red     = '\u001b[31m';
const green   = '\u001b[32m';
/* const yellow  = '\u001b[33m'; */
const blue    = '\u001b[34m';
/* const magenta = '\u001b[35m';
const cyan    = '\u001b[36m';
const white   = '\u001b[37m';
const reset   = '\u001b[0m'; */

export class ConsoleMessage {
  public static info(message: string): void {
    console.info(blue + message);
  }
  public static success(message: string): void {
    console.info(green + message);
  }
  public static error(message: unknown): void {
    console.error(red + message);
  }
}
