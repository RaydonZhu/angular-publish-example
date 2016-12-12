"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_model_1 = require("./model/user.model");
var comment_model_1 = require("./model/comment.model");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hubub Embed Components!';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user = new user_model_1.User('hub-user', 'female');
        this.comment = new comment_model_1.Comment(5001, '3rd-comment', '3rd-user');
        this.commentId = 101;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'hub-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
