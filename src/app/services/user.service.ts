
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    register(user: User) {
        return this.http.post(`${environment.API_URL}/api/mobile/users`, user);
    }
<<<<<<< HEAD

/*
    public getAll(): Promise<User[]> {

        return this.http.get(`${environment.API_URL}/api/users`)
            .toPromise()
            .then((response: Response) => response.json());
    }
    */

   public getUsers(){
        return this.http.get(`${environment.API_URL}/api/users`);
    }

  
=======
   public getUsers() {
        return this.http.get(`${environment.API_URL}/api/users`);
    }
>>>>>>> e46b41523e94e324f5e92cea3420bdf672c62c97
}
