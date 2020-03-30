import { VOError } from './VOErrorHandler';

export class VOProject {
  private projectId: string;
  public static of(projectId: unknown): VOProject | undefined {
    if ( typeof projectId !== 'string'){
      const errorMessage = VOError.typeError('projectId is not found or input data type is not string');
      console.error(errorMessage);
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
