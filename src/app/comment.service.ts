import { Injectable } from '@angular/core';
import { MockDatabase } from "./mock.database";
import { User } from "./model/user.model";
import { Comment } from "./model/comment.model";

@Injectable()
export class CommentService {
	
	constructor(private mockDatabase: MockDatabase) {
	}
	
	public getUser(): User {
		return this.mockDatabase.user;
	}
	
	public getComment(commentId: number): Comment {
		return this.mockDatabase.comments.find((po:Comment) => po.commendId === commentId);
	}
}