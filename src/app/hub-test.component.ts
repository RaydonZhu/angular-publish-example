import { Component, Input } from '@angular/core';

@Component({
    selector: 'hub-test',
  templateUrl: './hub-test.component.html',
  styleUrls: ['./hub-test.component.css']
})
export class HubTestComponent {

    message = "Click Me ...";

    onClick() {
        this.message = "Hello Hub!";
        console.log(this.message);

    }

}
