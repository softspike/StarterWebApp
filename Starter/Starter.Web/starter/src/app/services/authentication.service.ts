import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IdStringModel, UserModel } from '../models/models.model';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<UserModel>;
    public currentUser: Observable<UserModel>;

    private apiUrl = '/api/ApplicationUser';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserModel {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                console.log(this.currentUser)
                console.log('login')
                return user;
            }));
    }


    logout() {
        // remove user from local storage to log user out

        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
location.reload()

    }

    deleteUser(request: IdStringModel): Observable<any> {
        const url = `${this.apiUrl}/delete`;
        return this.http.post<IdStringModel>(url, request);
      }
}