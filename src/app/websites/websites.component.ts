import { Component, OnInit } from '@angular/core';

import { WebsitesService } from './websites.service';
import { WebsiteModel, getDefaultModel } from './website.models';

@Component({
    selector: 'cobiro-websites',
    templateUrl: './websites.component.html',
    styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {
    sites: WebsiteModel[];
    selectedSiteId: string;
    selectedSite = getDefaultModel();
    isEditMode = false;

    constructor(private service: WebsitesService) { }

    ngOnInit() {
        this.loadWebsites();
    }

    loadWebsites() {
        this.service.getSites()
            .subscribe((result: { sites: WebsiteModel[] }) => {
                this.sites = result.sites;
                if (this.sites && this.sites.length) {
                    this.selectedSiteId = this.sites[this.sites.length - 1].id.toString();
                }
            });
    }

    reloadWebsites() {
        this.selectedSite = getDefaultModel();
        this.isEditMode = false;
        this.loadWebsites();
    }

    editWebsite() {
        this.isEditMode = true;
        this.selectedSite = this.sites.find(i => i.id === parseInt(this.selectedSiteId, 10));
    }
}
