import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoPreloading, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MastheadComponent } from './masthead/masthead.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import {AppRoutes} from "./routes";
import {BlogContentComponent} from "./main-page/blog-content/blog-content.component";
import {BlogFeedComponent} from "./main-page/blog-content/blog-feed/blog-feed.component";
import { BlogFormComponent } from './blog-form/blog-form.component';
import {LocalStorageService} from "./shared/localStorage.service";
import {UserService} from "./shared/user.service";
import { BlogPageComponent } from './blog-page/blog-page.component';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MastheadComponent,
    LoginPageComponent,
    MainPageComponent,
    BlogContentComponent,
    BlogFeedComponent,
    BlogFormComponent,
    BlogPageComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes, { useHash: false, preloadingStrategy:NoPreloading})
  ],
  providers: [LocalStorageService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
