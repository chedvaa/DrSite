import {Component, OnInit} from "@angular/core";
import {Filter} from "../../Model/filterCls";
import { FilterService } from "../../services/filtersService";

@Component({
  selector: 'multy-filters',
  template:'<signal-filter *ngFor="let filterOptions of filters" [Filter] = filterOptions></signal-filter>',
  styleUrls: ['filters.component.css']

})
export class MultyFiltersComponent {

  filters: Filter[];
  constructor(){
    this.filters=[
      new Filter("מקצוע","aaa",[{id:1,name:"תורה"},{id:2,name:"נליא"},{id:2,name:"מתמטיקה"},{id:2,name:"נליא"},{id:2,name:"אנגלית"}]),
      new Filter("שכבת גיל","bbb",[{id:1,name:"א"},{id:2,name:"ב"},{id:2,name:"ל"},{id:2,name:"ד"},{id:2,name:"ה"}]),
      new Filter("נושאים","aaa",[{id:1,name:"גרפים"},{id:2,name:"bdd"},{id:2,name:"bdd"},{id:2,name:"bdd"},{id:2,name:"bdd"}]),
      new Filter("תחום דעת","aaa",[{id:1,name:"qqq"},{id:2,name:"bbbb"},{id:2,name:"bdd"},{id:2,name:"bdd"},{id:2,name:"d"}])
    ]
    console.log(this.filters)
  // }
  //constructor(private fs:FilterService){
   // this.fs.getTeacher().then((data)=>)
  }

}
