import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { DataHanlerService } from './dataHandler.service';
import { AccordianDataComponent } from './accordian-data/accordian-data.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccordianDataComponent,
    UserFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule ,
    BrowserAnimationsModule
  ],
  providers: [
    DataHanlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
