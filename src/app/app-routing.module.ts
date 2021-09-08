import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';

const routes: Routes = [
{
 path: '',
 component: HomeComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'contact',
  component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponent=[AboutComponent,HomeComponent]