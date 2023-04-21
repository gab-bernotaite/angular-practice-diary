import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddDiaryEntryComponent } from './add-diary-entry/add-diary-entry.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddDiaryEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
