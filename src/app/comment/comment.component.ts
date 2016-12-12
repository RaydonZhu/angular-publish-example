import { Component, Input, OnInit } from '@angular/core';
import { Comment } from "../model/comment.model";
import { CommentService } from "../comment.service";

@Component({
	selector   : 'hubub-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./_comment.component.scss']
})
export class CommentComponent implements OnInit{
	@Input()
	commentId: number;
	comment: Comment;
	
	constructor(private commentService: CommentService){
		
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
