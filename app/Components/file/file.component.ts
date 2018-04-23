import {Component, Input} from "@angular/core";
import {File} from "../../Model/fileCls"


@Component({
  selector: 'signal-file',
  templateUrl:'./file.component.html'
})
export class SignalFileComponent   {
  @Input('File') file: File;
}



