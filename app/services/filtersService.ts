import {Filter} from "../Model/filterCls";

export class FilterService{
  io:string;
   getFilters(){
    return  [
      new Filter("מקצוע","aaa",[{id:1,name:"תורה"},{id:2,name:"נליא"},{id:2,name:"מתמטיקה"},{id:2,name:"נליא"},{id:2,name:"אנגלית"}]),
      new Filter("שכבת גיל","bbb",[{id:1,name:"א"},{id:2,name:"ב"},{id:2,name:"ל"},{id:2,name:"ד"},{id:2,name:"ה"}]),
      new Filter("נושאים","aaa",[{id:1,name:"גרפים"},{id:2,name:"bdd"},{id:2,name:"bdd"},{id:2,name:"bdd"},{id:2,name:"bdd"}]),
      new Filter("תחום דעת","aaa",[{id:1,name:"qqq"},{id:2,name:"klkl"},{id:2,name:"bdd"},{id:2,name:"bdd"},{id:2,name:"d"}])
    ]
  }
}
