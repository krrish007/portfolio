import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';

const routes: Routes =  [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'skills', component: SkillsComponent },
  { path: 'about', component: AboutComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
exports:[RouterModule]
})

export class AppRoutingModule {
  //routes =
  

}
