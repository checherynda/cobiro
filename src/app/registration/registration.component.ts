import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import {
    RegistrationModel,
    COUNTRIES,
    getDefaultModel,
    LoginSuccessResponse,
    RegistrationSuccessResponse
} from './registration.models';
import { RegistrationService } from './registration.service';

@Component({
    selector: 'cobiro-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    model: RegistrationModel = getDefaultModel();
    availableCountries = COUNTRIES;
    errorMessage: string;

    constructor(private router: Router, private registrationService: RegistrationService) { }

    submit() {
        this.registrationService.register(this.model)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    this.errorMessage = error.error.message;
                    return of(null);
                }),
                switchMap((response: RegistrationSuccessResponse) => {
                    if (response) {
                        return this.registrationService.login({ email: this.model.email, password: this.model.password });
                    } else {
                        return of(null);
                    }
                })
            )
            .subscribe((response: LoginSuccessResponse) => {
                if (response) {
                    localStorage.setItem('token', response.access_token);
                    this.router.navigateByUrl('websites');
                }
            });
    }
}
