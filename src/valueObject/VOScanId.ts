export class VOScanId {
  private scanId: string;
  public static of(scanId: string): VOScanId | undefined {
    if (typeof scanId !== 'string') {
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
