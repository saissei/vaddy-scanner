import { ErrorSwitcher } from '../controller/error';

export class VOScanId {
  private scanId: string;
  public static of(scanId: string): VOScanId | undefined {
    if (typeof scanId !== 'string') {
      ErrorSwitcher.handle('scanId is not found. Plaese check VAddy scanning status.');
      return;
    }
    return new VOScanId(scanId);
  }
  private constructor(scanId: string){
    this.scanId = scanId;
  }
  public toString(): string {
    return this.scanId;
  }
}
