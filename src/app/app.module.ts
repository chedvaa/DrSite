import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms"
import {HttpModule} from "@angular/http"
import {rootComponent} from './components/index/index.component'
import {SignalFileComponent} from './components/file/file.component'
import {MultyFilesComponent} from './components/files/files.component'
import {SignalFilterComponent} from './components/filter/filter.component'
import {MultyFiltersComponent} from './components/filters/filters.component'
import {FilterService} from "./services/filtersService";
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    rootComponent,
    SignalFileComponent,
    MultyFilesComponent,
    SignalFilterComponent,
    MultyFiltersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [FilterService],
  bootstrap: [rootComponent]
})
export class AppModule { }
