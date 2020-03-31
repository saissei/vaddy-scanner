import { ErrorSwitcher } from '../controller/error';

export class VOProject {
  private projectId: string;
  public static of(projectId: unknown): VOProject | undefined {
    if ( typeof projectId !== 'string'){
      ErrorSwitcher.handle('projectId is not found or input data type is not string');
      return;
    }
    return new VOProject(projectId);
  }
  private constructor(projectId: string){
    this.projectId = projectId;
  }
  public toString(): string {
    return this.projectId;
  }
}
