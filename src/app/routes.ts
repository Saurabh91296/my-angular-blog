import {Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {BlogFormComponent} from "./blog-form/blog-form.component";
import {BlogPageComponent} from "./blog-page/blog-page.component";
import {EditFormComponent} from "./edit-form/edit-form.component";

export const AppRoutes:Routes=[
  {path:'login',component:LoginPageComponent},
  {path:'', redirectTo:'/blog',pathMatch:'full'},
  {path:'blog',component:MainPageComponent},
  {path:'blog-form',component:BlogFormComponent},
  {path:'blog-page/:id',component:BlogPageComponent},
  {path:'edit-blog/:blog',component:EditFormComponent}
];

