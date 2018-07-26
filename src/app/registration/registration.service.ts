import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegistrationModel, LoginModel } from './registration.models';
import { environment } from '../../environments/environment';

@Injectable()
export class RegistrationService {
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    register(model: RegistrationModel): Observable<Object> {
        return this.http.post(`${environment.API_ENDPOINT}register`, model, this.httpOptions);
    }

    login(model: LoginModel): Observable<Object> {
        return this.http.post(`${environment.API_ENDPOINT}login`, model, this.httpOptions);
    }
}
