"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HubTestComponent = (function () {
    function HubTestComponent() {
        this.message = "Click Me ...";
    }
    HubTestComponent.prototype.onClick = function () {
        this.message = "Hello Hub!";
        console.log(this.message);
    };
    HubTestComponent = __decorate([
        core_1.Component({
            selector: 'hub-test',
            styles: ["\n       h1 {\n            color: #ffc65c;\n        }\n    "],
            template: "<div>\n                  <h1 (click)=\"onClick()\">{{message}}</h1>\n               </div>"
        })
    ], HubTestComponent);
    return HubTestComponent;
}());
exports.HubTestComponent = HubTestComponent;