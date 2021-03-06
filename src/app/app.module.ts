import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NgProgressModule } from 'ng2-progressbar';
import { HoverDirective } from './hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    AboutComponent,
    HoverDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgProgressModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
