export function renderPost(post, postTitleElement, postBodyElement) {
    if (!post) {
        postTitleElement.innerText = 'Post not found';
        postBodyElement.innerText = '';
        return;
    }
    postTitleElement.innerText = post.title;
    postBodyElement.innerText = post.body;
}

export function renderComments(comments, commentsContainer) {
    commentsContainer.innerHTML = '';
    if (comments.length === 0) {
        commentsContainer.innerHTML = '<p>No comments available.</p>';
        return;
    }
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${comment.name}:</strong> ${comment.body}`;
        commentsContainer.appendChild(commentElement);
    });
}
