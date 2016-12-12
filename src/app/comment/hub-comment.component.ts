import { Component, Input, OnInit } from '@angular/core';
import { HubCommentService } from "./hub-comment.service";
import { HubComment } from "../model/hub-comment.model";

@Component({
	selector   : 'hub-comment',
  templateUrl: './hub-comment.component.html',
  styleUrls: ['./hub-comment.component.css']
})
export class HubCommentComponent implements OnInit{
	@Input()
	commentId: number;
	comment: HubComment;
	
	constructor(private commentService: HubCommentService){
		
	}
	
	ngOnInit(): void {
		if (this.commentId) {
			this.comment = this.commentService.getComment(this.commentId);
		}
		else {
			this.comment = this.commentService.getComment(1);
		}
	};
	
	openGoogle() {
		window.open('http://www.google.com');
	}
}
