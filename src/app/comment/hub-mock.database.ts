import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HubComment } from "../model/hub-comment.model";
import { HubUser } from "../model/hub-user.model";

@Injectable()
export class HubMockDatabase {
	public user: HubUser;
	public comments: HubComment[] = [];
	
	constructor() {
		this.init()
	}
	
	/* private methods */
	
	private init(): void {
		this.user = new HubUser('Tom Clause', 'male');
		let comment: HubComment;
		
		comment = new HubComment(101, 'comment101, comment from mock database.', this.user.name);
		this.comments.push(comment);
		comment = new HubComment(102, 'comment102', this.user.name);
		this.comments.push(comment);
		comment = new HubComment(1, 'default comment 1', this.user.name);
		this.comments.push(comment);
	}
	 
}
