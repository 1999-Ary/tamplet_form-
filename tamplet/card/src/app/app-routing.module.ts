import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { NestedComponent } from './nested/nested.component';

const routes: Routes = [
  {path:'display', component: DisplayComponent},
  {path:'edit', component:EditComponent},
  {path:'nested', component:NestedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
