import { Component, Input, OnInit } from '@angular/core';
import { HubCommentService } from "./hub-comment.service";
import { HubComment } from "../model/hub-comment.model";

@Component({
	selector   : 'hub-comment',
	styles: [`
		.chat-comment {
			position: absolute;
			display: inline-block;
			vertical-align: baseline;
			cursor: pointer;
			background: #ffffff;
			font-family: "Helvetica Neue", Helvetica, helvetica, "Lucida Grande", sans-serif;
			width: 242px;
			padding: 10px;
			border: 1px solid #C0D7EA;
			border-radius: 2px;
			box-sizing: border-box;
		}
		
		.chat-comment .float-left {
			float: left;
		}
		.chat-comment .float-right {
			float: right;
		}
		
		.chat-comment .comment-content {
			background: #ffffff;
		}
		.chat-comment .comment-content .author-avatar {
			border: 1px solid #E2E2E2;
			display: inline-block;
			width: 30px;
			height: 30px;
			overflow: hidden;
			text-align: center;
			background: #E2E2E2;
			
			cursor: pointer;
			text-decoration: none;
		}
			
		.chat-comment .comment-content .comment-holder {
			margin: 1px 0 0 8px;
			width: calc(100% - 45px);
		}
				
		.chat-comment .comment-content .comment-holder .author-username {
			max-width: 70%;
			overflow: hidden;
			
			cursor: pointer;
			text-decoration: none;
			font-size: 12px;
			font-weight: 500;
			color: #333333;
			white-space: nowrap;
			text-overflow: ellipsis;
			min-height: 18px;
		}
				
		.chat-comment .comment-content .comment-holder .author-timestamp {
			top: 10px;
			right: 10px;
			font-size: 10px;
			font-weight: 400;
			color: #7D7D7D;
			text-align: right;
			padding: 0;
			position: absolute;
			line-height: 1.4em;
			margin: 4px 1px 5px 0;
		}
				
		.chat-comment .comment-content .comment-holder .comment-text {
			max-height: 77px;
			overflow: hidden;
			max-width: 90%;
			
			margin-left: 8px;
			margin-right: 8px;
			
			padding-top: 3px;
			
			background: #ffffff;
			
			font-size: 12px;
			font-weight: 400;
			color: #68696C;
			line-height: 1.25em;
			display: inline-block;
			
			word-wrap: break-word;
		}
    `],
	template: `
		<div *ngIf="comment" class="chat-comment">
			<div class="comment-content">
				<div class="author-avatar float-left" [title]="comment.author">
					<img width="30" height="30" [src]="comment.authorImage"/>
				</div>
				<div class="comment-holder float-left">
					<div class="author-username">
						<span>{{ comment.author }}</span>
					</div>
					<div class="author-timestamp float-right">
						<span>{{ comment.createdPrecise | amTimeAgo }}</span>
					</div>
					<div class="comment-text" (click)="openGoogle()" >
						<span><i>{{ comment.text }} </i></span>
					</div>
				</div>
			</div>
		</div>
	`
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
