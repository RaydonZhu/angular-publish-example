import { NgModule } from '@angular/core';
 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment/moment.module';
import { MockDatabase } from "./mock.database";
import { CommentService } from "./comment.service";
import { CommentComponent } from "./comment/comment.component";

@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MomentModule,
    HttpModule
  ],
  providers: [
    MockDatabase,
    CommentService
  ],
  exports: [
    CommentComponent
  ]
})
export class HububModule { }
