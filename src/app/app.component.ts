import { Component } from '@angular/core';
import { HubComment } from "./model/hub-comment.model";
import { HubUser } from "./model/hub-user.model";

@Component({
  selector: 'hub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  
  commentId: number;
  comment: HubComment;
  user: HubUser;
  
  ngOnInit(): void {
    this.user = new HubUser('hub-user', 'female');
    this.comment = new HubComment(5001, '3rd-comment', '3rd-user');
    this.commentId = 101;
  }
}
