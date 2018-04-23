export class File{
  public IdFile:number;
  public IdTeacher:number;
  public Title:string;
  public Data:string;
  public Group:string;
  public Level:number;
  public Url:string;
  public imgSrc:string;

  public Subject:string;
  public subcategory:string[];
  public type:string;

  constructor(IdFile:number,Data:string="bla",Title:string="aaa",imgSrc:string=""){
    this.IdFile=IdFile;
    this.Title=Title;
    this.Data=Data;
    this.imgSrc = imgSrc;
  }
  // constructor(IdFile:int,IdTeacher:int,Title:string,Data:string,Group:string,
  //             Level:int,Url:string,Subject:Subject,subcategory:string[],
  //             type:types){
  //   this.IdFile=IdFile;
  //   this.IdTeacher=IdTeacher
  //   this.Title=Title;
  //   this.Data=Data;
  //   this.Group=Group;
  //   this.Level=Level;
  //   this.Url=Url;
  //   this.Subject=Subject;
  //   this.subcategory=subcategory;
  //   this.type=type;
  // }

}
