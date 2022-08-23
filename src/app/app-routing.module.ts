import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { SignupPageComponent } from './pages/signup-page/signup-page.component'
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component'
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component'

const routes: Routes = [
  { path: 'edit/:id', component: ContactEditComponent },
  { path: 'edit', component: ContactEditComponent },
  { path: 'contact/:id', component: ContactDetailsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'statistic', component: StatisticPageComponent },
  { path: '', component: HomePageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
