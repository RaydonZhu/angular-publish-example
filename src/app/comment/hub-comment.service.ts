import { Injectable } from '@angular/core';
import { HubMockDatabase } from "./hub-mock.database";
import { HubUser } from "../model/hub-user.model";
import { HubComment } from "../model/hub-comment.model";

@Injectable()
export class HubCommentService {
	
	constructor(private mockDatabase: HubMockDatabase) {
	}
	
	public getUser(): HubUser {
		return this.mockDatabase.user;
	}
	
	public getComment(commentId: number): HubComment {
		return this.mockDatabase.comments.find((po:HubComment) => po.commendId === commentId);
	}
}
