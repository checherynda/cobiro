import { Component, Output, EventEmitter, Input } from '@angular/core';

import { WebsitesService } from '../websites.service';
import { WebsiteModel, getDefaultModel } from '../website.models';

@Component({
    selector: 'form-add-site',
    templateUrl: './form-add-site.component.html',
    styleUrls: ['./form-add-site.component.css']
})
export class FormAddSiteComponent {
    @Input() model: WebsiteModel = getDefaultModel();
    @Input() isEditMode: boolean;
    isDisabled: boolean;

    @Output() addSiteEvent = new EventEmitter();

    constructor(private service: WebsitesService) { }

    submit() {
        this.isDisabled = true;
        this.service.addOrUpdateSite(this.model)
            .subscribe(
                () => {
                    this.isDisabled = false;
                    this.addSiteEvent.emit();
                },
                () => this.isDisabled = false
            );
    }
}
