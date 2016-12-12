"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CommentComponent = (function () {
    function CommentComponent(commentService) {
        this.commentService = commentService;
    }
    CommentComponent.prototype.ngOnInit = function () {
        if (this.commentId) {
            this.comment = this.commentService.getComment(this.commentId);
        }
        else {
            this.comment = this.commentService.getComment(1);
        }
    };
    ;
    CommentComponent.prototype.openGoogle = function () {
        window.open('http://www.google.com');
    };
    __decorate([
        core_1.Input()
    ], CommentComponent.prototype, "commentId", void 0);
    CommentComponent = __decorate([
        core_1.Component({
            selector: 'hubub-comment',
            templateUrl: './comment.component.html',
            styleUrls: ['./_comment.component.scss']
        })
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
