"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var user_model_1 = require("./model/user.model");
var comment_model_1 = require("./model/comment.model");
var MockDatabase = (function () {
    function MockDatabase() {
        this.comments = [];
        this.init();
    }
    /* private methods */
    MockDatabase.prototype.init = function () {
        this.user = new user_model_1.User('Tom Clause', 'male');
        var comment;
        comment = new comment_model_1.Comment(101, 'comment101, from mock database.', this.user.name);
        this.comments.push(comment);
        comment = new comment_model_1.Comment(102, 'comment102', this.user.name);
        this.comments.push(comment);
        comment = new comment_model_1.Comment(1, 'default comment 1', this.user.name);
        this.comments.push(comment);
    };
    MockDatabase = __decorate([
        core_1.Injectable()
    ], MockDatabase);
    return MockDatabase;
}());
exports.MockDatabase = MockDatabase;
