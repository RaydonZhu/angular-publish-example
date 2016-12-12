"use strict";
var Comment = (function () {
    function Comment(commentId, text, userName, userImage) {
        this.commendId = commentId;
        this.author = userName;
        this.authorImage = userImage || 'https://lh3.googleusercontent.com/-8E5JzR1wOmk/AAAAAAAAAAI/AAAAAAAAAAA/XGPOwDUIhOo/photo.jpg?sz=2000';
        this.text = text;
        this.createdPrecise = new Date();
        this.totalLikes = 0;
    }
    return Comment;
}());
exports.Comment = Comment;
