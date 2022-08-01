import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SsHomeComponent } from './ss-home/ss-home.component';
const routes = [{path:'',component:SsHomeComponent,children:[
{path:'',loadModule:()=> import('./tickets/tickets.module').then(m=>m.TicketsModule)}]}]
@NgModule({
  declarations: [
    AppComponent,
    SsHomeComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([...routes])
    
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
