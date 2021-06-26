import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }

  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
    }
  },

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
    }
  },

  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register',
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
