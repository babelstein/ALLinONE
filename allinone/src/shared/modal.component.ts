import { Component, Input } from '@angular/core';

@Component({
    selector: 'simple-modal',
    template:`
        <div class="modal-header">
            <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .modal-body{ hiehgt: 250px; overflow-y: scroll;}
    `]
})

export class ModalComponent{
    @Input() title: string;
}