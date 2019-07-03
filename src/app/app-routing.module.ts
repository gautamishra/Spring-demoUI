import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './components/login-register/login-register.component';

const routes: Routes = [
  {
    path: 'register',
    component: LoginRegisterComponent,
    data: {
      login: false
    }
  },
  {
    path: 'login',
    component: LoginRegisterComponent,
    data: {
      login: true
    }
  }, {
    path: '',
    component: LoginRegisterComponent,
    data: {
      login: false
    }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
