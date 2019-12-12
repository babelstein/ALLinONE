import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    private htmlElement: HTMLElement;

    constructor(
        @Inject(JQ_TOKEN) private $: any,
        private elementRef: ElementRef) {
            this.htmlElement = this.elementRef.nativeElement; 
        }

    ngOnInit(): void {
        this.htmlElement.addEventListener('click', event => {
            this.$('#filters-modal').modal({});
        })
    }
}