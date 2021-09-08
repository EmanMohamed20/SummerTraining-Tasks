import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
    //routingComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //NgModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

