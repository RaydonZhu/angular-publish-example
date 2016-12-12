import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { User } from "./model/user.model";
import { Comment } from "./model/comment.model";

@Injectable()
export class MockDatabase {
	public user: User;
	public comments: Comment[] = [];
	
	constructor() {
		this.init()
	}
	
	/* private methods */
	
	private init(): void {
		this.user = new User('Tom Clause', 'male');
		let comment: Comment;
		
		comment = new Comment(101, 'comment101, from mock database.', this.user.name);
		this.comments.push(comment);
		comment = new Comment(102, 'comment102', this.user.name);
		this.comments.push(comment);
		comment = new Comment(1, 'default comment 1', this.user.name);
		this.comments.push(comment);
	}
	 
}
