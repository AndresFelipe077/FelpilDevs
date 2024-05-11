import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl: string = apiServer.serverUrl;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.apiUrl);
  }
}
