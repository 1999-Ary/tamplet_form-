import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { NestedComponent } from './nested/nested.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    EditComponent,
    NestedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
