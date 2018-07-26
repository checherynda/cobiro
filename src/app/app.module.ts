import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { ForInPipe } from './pipes/forin.pipe';
import { AuthGuard } from './guards/auth.guard';

import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration/registration.service';

import { FormAddSiteComponent } from './websites/form-add-site/form-add-site.component';
import { WebsitesService } from './websites/websites.service';
import { WebsitesComponent } from './websites/websites.component';

@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
        WebsitesComponent,
        FormAddSiteComponent,
        ForInPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [
        AuthGuard,
        RegistrationService,
        WebsitesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
