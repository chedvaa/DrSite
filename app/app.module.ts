import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms"
import {ImageUploadModule} from "angular2-image-upload";

import {rootComponent} from './components/index/index.component'
import {SignalFileComponent} from './components/file/file.component'
import {MultyFilesComponent} from './components/files/files.component'
import {SignalFilterComponent} from './components/filter/filter.component'
import {MultyFiltersComponent} from './components/filters/filters.component'
import {FilterService} from "./services/filtersService";

@NgModule({
  declarations: [
    rootComponent,
    SignalFileComponent,
    MultyFilesComponent,
    SignalFilterComponent,
    MultyFiltersComponent
  ],
  imports: [
    BrowserModule,FormsModule, ImageUploadModule.forRoot()
  ],
  providers: [FilterService],
  bootstrap: [rootComponent]
})
export class AppModule { }
