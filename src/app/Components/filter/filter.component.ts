import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Filter} from "../../Model/filterCls";

@Component({
  selector: 'signal-filter',
  templateUrl:'./filter.component.html'
})
export class SignalFilterComponent   {
  @Input('Filter') filter: Filter;
  numOfDisplay:number;
  displayFilter:boolean;
 // name:string;

  constructor(){
    this.numOfDisplay=2;
    this.displayFilter = true;
  }
  cancelChoises() {
    this.filter.Options.forEach((option) => {
      console.log("arrived!!!");
      console.log(this.filter.Options);
      option.checked = false;

    })
  }
  showAll(){
    this.numOfDisplay=0;
  }
}
