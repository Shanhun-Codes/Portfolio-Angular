import { Injectable, signal } from '@angular/core';
import USER_DATA from '../staticData/userInfo'
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user = signal<User>(USER_DATA)
}
