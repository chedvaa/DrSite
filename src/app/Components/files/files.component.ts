import {Component} from "@angular/core";
import {File} from "../../Model/fileCls"
@Component({
  selector: 'multy-files',
  templateUrl:'./files.component.html',
  styleUrls: ['files.component.css']

})
export class MultyFilesComponent {
  files: File[];
  constructor(){
    this.files=[
      new File(1, "מערך שיעור "  ," קריאת גרפים",""),
      new File(2, "יישומון במתמטיקה" , "סטטיסטיקה והסתברות",""),
      new File(3, "מערך שיעור","שיטת ספירה",""),
      new File(4, "טקסט מדעי" , "סטטיסטיקה והסתברות",""),
      new File(5, "תורה" , "סימני כשרות",""),
      new File(6, "מצגת" , "יונה הנביא",""),

//new File("BBBB","bbb",[{id:1,name:"qqq"},{id:2,name:"bbbb"}])
    ]
//console.log(this.filters)
  }

}
