import { Component, } from "@angular/core";
import { Freight, FreightType } from 'src/freights/models';
import { FreightsService } from 'src/services/freights.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Country } from 'src/shared';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './freight-add.component.html'
})

export class FreightAddComponent {

    freight: Freight;
    freightFormGroup: FormGroup

    constructor(private freightService: FreightsService, private formBuilder: FormBuilder, private authService : AuthService, private router : Router) {
        this.freightFormGroup = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            type: ['', Validators.required],
            validTo: ['', Validators.required],
            source: this.formBuilder.group({
                country: ['', Validators.required],
                postCode: ['', Validators.required],
                addres1: ['', Validators.required],
                addres2: ['', Validators.required],
                description: ['']
            }),
            destination: this.formBuilder.group({
                country: ['', Validators.required],
                postCode: ['', Validators.required],
                addres1: ['', Validators.required],
                addres2: ['', Validators.required],
                description: ['']
            })
        })
    }

    freightTypes(): string[] {
        return Object.keys(FreightType);
    }

    countries(): any[] {
        return Object.keys(Country).map((a) => {
            return { key: Country[a], value: a }
        });
    }

    addFreight() {
        let freightToAdd = this.freightFormGroup.value as Freight;
        freightToAdd.type = freightToAdd.type;
        freightToAdd.userId = this.authService.getAuthenticatedUser().id;
        this.freightService.addFreight(freightToAdd).subscribe((freight) => {
            if(freight !== null){
                this.router.navigate(['freights',freight.id]);
            }
        });
    }
}