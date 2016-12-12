export class Comment {
	public commendId: number;
	public author: string;
	public authorImage: string;
	
	public createdPrecise: Date;
	public totalLikes: number;
	public text: string;
	
	constructor(commentId: number, text: string, userName: string, userImage?: string) {
		this.commendId      = commentId;
		this.author         = userName;
		this.authorImage    = userImage || 'https://lh3.googleusercontent.com/-8E5JzR1wOmk/AAAAAAAAAAI/AAAAAAAAAAA/XGPOwDUIhOo/photo.jpg?sz=2000';
		this.text           = text;
		this.createdPrecise = new Date();
		this.totalLikes     = 0;
	}
}