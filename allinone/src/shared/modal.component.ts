import { Component, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Component({
    selector: 'modal',
    template:`
        <div id={{elementId}} #modalContainer>
            <div class="modal-header">
                <h4 class="modal-title">{{title}}</h4>
            </div>
            <div class="modal-body">
                <ng-content></ng-content>
            </div>
            <div class="modal-close">
                <button type="button" mdbBtn color="error" (click)="close()">Close</button>
            </div>
        </div>
    `,
    styles: [`
        .modal-body{ hiehgt: 250px; overflow-y: scroll;}
    `]
})

export class ModalComponent{
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalContainer') modalContainer : ElementRef

    constructor(@Inject(JQ_TOKEN) private $: any){
    }

    close(){
        this.$(this.modalContainer.nativeElement).modal('hide');
    }
}