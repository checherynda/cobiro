import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { WebsiteModel } from './website.models';

@Injectable()
export class WebsitesService {
    private token = localStorage.getItem('token');
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        })
    };

    constructor(private http: HttpClient) { }

    addOrUpdateSite(model: WebsiteModel): Observable<Object> {
        if (model.id) {
            return this.http.patch(`${environment.API_ENDPOINT}site/${model.id}`,
                { website: model.website, name: model.name }, this.httpOptions);
        } else {
            return this.http.post(`${environment.API_ENDPOINT}site`, model, this.httpOptions);
        }
    }

    getSites(): Observable<Object> {
        return this.http.get(`${environment.API_ENDPOINT}site`, this.httpOptions);
    }
}
