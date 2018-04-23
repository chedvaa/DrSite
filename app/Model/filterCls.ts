export class Filter{
  public Title:string;
  public Type:string;
  public Options:any;
  constructor(Title:string,Type:string,Options:any){

    this.Type = Type;
    this.Title = Title;
    this.Options=Options;
  }
}
