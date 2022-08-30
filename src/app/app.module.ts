import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';

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
import { TransListComponent } from './cmps/trans-list/trans-list.component';
import { TransPreviewComponent } from './cmps/trans-preview/trans-preview.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './cmps/chart/line-chart/line-chart.component';
import { BtcPricesComponent } from './cmps/btc/btc-prices/btc-prices.component';


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
    ContactEditComponent,
    TransListComponent,
    TransPreviewComponent,
    LineChartComponent,
    BtcPricesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
