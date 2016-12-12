import { NgModule } from '@angular/core';
 
import { HubTestComponent } from './hub-test.component';
import { HubUser } from "./model/hub-user.model";
import { HubComment } from "./model/hub-comment.model";
import { HubCommentComponent } from "./comment/hub-comment.component";
import { HubMockDatabase } from "./comment/hub-mock.database";
import { HubCommentService } from "./comment/hub-comment.service";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment/moment.module';

@NgModule({
  declarations: [
    HubTestComponent,
    // HubUser,
    // HubComment,
    // HubMockDatabase,
    // HubCommentService,
    HubCommentComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MomentModule,
    HttpModule
  ],
  providers: [
    HubMockDatabase,
    HubCommentService
  ],
  exports: [
    HubTestComponent,
    // HubUser,
    // HubComment,
    // HubMockDatabase,
    // HubCommentService,
    HubCommentComponent
  ]
})
export class HubModule { }
