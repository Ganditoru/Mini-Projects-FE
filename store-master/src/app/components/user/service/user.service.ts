import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { User } from "../models/user.model";
import { AddUserRequest } from "../models/add-user-request.model";

@Injectable()
  export class UserService {
    private userApiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    constructor(private http: HttpClient) {}
    
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.userApiUrl).pipe(delay(2000));
    }

    createUser(userToAdd: AddUserRequest): Observable<User>{
      const customRandomId = Math.floor(Math.random() * 1000) + 1;

      return of({ ...userToAdd, id: customRandomId  } )
    }
  }