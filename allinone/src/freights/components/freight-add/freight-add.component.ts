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
    freightFormGroup: FormGroup;

    constructor(private freightService: FreightsService, private formBuilder: FormBuilder, private authService : AuthService, private router : Router) {
        this.freightFormGroup = this.formBuilder.group({
            Name: ['', Validators.required],
            Description: ['', Validators.required],
            Type: ['', Validators.required],
            ValidTo: ['', Validators.required],
            Source: this.formBuilder.group({
                Country: ['', Validators.required],
                PostCode: ['', Validators.required],
                Addres1: ['', Validators.required],
                Addres2: ['', Validators.required],
                Description: ['']
            }),
            Destination: this.formBuilder.group({
                Country: ['', Validators.required],
                PostCode: ['', Validators.required],
                Addres1: ['', Validators.required],
                Addres2: ['', Validators.required],
                Description: ['']
            })
        })
    }

    freightTypes(): FreightType[] {
        return Object.values(FreightType).filter(a => !Object.keys(FreightType).includes(a));
    }

    countries(): any[] {
        return Object.keys(Country).map((a) => {
            return { key: Country[a], value: a }
        });
    }

    addFreight() {
        let freightToAdd = this.freightFormGroup.value as Freight;
        freightToAdd.Type = +freightToAdd.Type;
        freightToAdd.UserId = this.authService.getAuthenticatedUser().id;
        this.freightService.addFreight(freightToAdd).subscribe((freight) => {
            if(freight !== null){
                this.router.navigate(['freights',freight.Id]);
            }
        });
    }
}