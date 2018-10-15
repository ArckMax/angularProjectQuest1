import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes:Routes = [
  {path:"signup", component:SignUpComponent, pathMatch:"full"},
  {path:"userprofile", component:UserProfileComponent, pathMatch:"full"},
  {path:"", redirectTo:"userprofile", pathMatch:"full"}
]

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {useHash:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
