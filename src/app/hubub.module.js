"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var moment_module_1 = require('angular2-moment/moment.module');
var mock_database_1 = require("./mock.database");
var comment_service_1 = require("./comment.service");
var comment_component_1 = require("./comment/comment.component");
var HububModule = (function () {
    function HububModule() {
    }
    HububModule = __decorate([
        core_1.NgModule({
            declarations: [
                comment_component_1.CommentComponent
            ],
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                moment_module_1.MomentModule,
                http_1.HttpModule
            ],
            providers: [
                mock_database_1.MockDatabase,
                comment_service_1.CommentService
            ],
            exports: [
                comment_component_1.CommentComponent
            ]
        })
    ], HububModule);
    return HububModule;
}());
exports.HububModule = HububModule;
