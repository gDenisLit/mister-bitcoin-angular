import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { SignupPageComponent } from './pages/signup-page/signup-page.component'
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'statistic', component: StatisticPageComponent },
  { path: 'details', component: ContactDetailsPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
