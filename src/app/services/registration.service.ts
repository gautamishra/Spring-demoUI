import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../modal/user.modal';
import { ApiEndPoints } from '../constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) {
  }

  registerUser = (userInfo: UserInfo) => {
    return this._http.post(ApiEndPoints.registerUser, userInfo);
  }

  loginUser = (email: string, password: string) => {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);
    return this._http.post(ApiEndPoints.login, formData, {
      responseType: 'text'
    });
  }
}






