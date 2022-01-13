import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyconComponent } from './bodycon/bodycon.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path:'about',component: AboutComponent },
  {path:'contact',component:ContactComponent},
  {path:'education',component:EducationComponent},
  {path:'bodycon',component:BodyconComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BodyconComponent,AboutComponent,ContactComponent,EducationComponent]