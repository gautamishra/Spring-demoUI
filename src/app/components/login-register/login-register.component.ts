import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserInfo, UserInfoDto } from 'src/app/modal/user.modal';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isLContainer } from '@angular/core/src/render3/util';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  // today:Date = new Date();
  // maxDate = new Date(2020, 0, 1);

  matcher = new MyErrorStateMatcher();
  userInfo = new UserInfoDto();

  isLogin = true;

  constructor(private registerationService: RegistrationService,
    private route: ActivatedRoute) {
    route.data.subscribe((data) => {
      this.isLogin = data.login;
    });
  }

  ngOnInit() {
    // this.maxDate = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
    // this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate());
    // console.log(this.maxDate);
  }

  register = (form) => {
    const controls = form.form.controls;
    this.userInfo.firstname = controls.firstName.value;
    this.userInfo.lastname = controls.lastName.value;
    this.userInfo.email = controls.email.value;
    this.userInfo.password = controls.password.value;
    this.userInfo.dateOfBirth = controls.dateOfBirth.value;
    this.registerationService.registerUser(this.userInfo)
      .subscribe((res) => {
        console.log(res);
      });
  }

  login = (form) => {
    const controls = form.form.controls;
    this.userInfo.email = controls.email.value;
    this.userInfo.password = controls.password.value;
    this.registerationService.loginUser(this.userInfo.email, this.userInfo.password)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
