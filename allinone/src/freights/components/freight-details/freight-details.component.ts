import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FreightsService } from 'src/services/freights.service';
import { Freight } from '../../models/freight';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  templateUrl: './freight-details.component.html'
})
export class FreightDetailsComponent implements OnInit {

  freight: Freight;

  constructor(private freightService : FreightsService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.freightService.Get(+params['id']).subscribe((freight) => this.freight = freight)
    });
  }
}