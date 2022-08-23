import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app-root/app.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    ContactDetailsPageComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    StatisticPageComponent,
    AppHeaderComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
