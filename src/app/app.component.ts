import { Component, OnInit } from '@angular/core';
import { User } from "./model/user.model";
import { Comment } from "./model/comment.model";

@Component({
  selector: 'hub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hubub Embed Components!';
  
  
  commentId: number;
  comment: Comment;
  user: User;
  
  ngOnInit(): void {
    this.user = new User('hub-user', 'female');
    this.comment = new Comment(5001, '3rd-comment', '3rd-user');
    this.commentId = 101;
  }
}
