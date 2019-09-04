import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndPoints } from '../constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUserInfo = () => {
    console.log(ApiEndPoints.userInfo);
    return this._http.get(ApiEndPoints.userInfo);
  }
}
