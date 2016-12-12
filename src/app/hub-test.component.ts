import { Component, Input } from '@angular/core';

@Component({
    selector: 'hub-test',
    styles: [`
       h1 {
            color: #ffc65c;
        }
    `],
    template: `<div>
                  <h1 (click)="onClick()">{{message}}</h1>
               </div>`
})
export class HubTestComponent {

    message = "Click Me ...";

    onClick() {
        this.message = "Hello Hub!";
        console.log(this.message);

    }

}
