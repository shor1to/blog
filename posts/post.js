import { fetchPostData, fetchPostComments } from './fetchPostData.js';
import { renderPost, renderComments } from './renderPost.js';

document.addEventListener('DOMContentLoaded', async () => {
    const pageParams = new URLSearchParams(window.location.search);
    const postId = pageParams.get('id');

    if (postId) {
        const postTitle = document.getElementById('post-title');
        const postBody = document.getElementById('post-body');
        const commentsContainer = document.getElementById('comments');

        const post = await fetchPostData(postId);
        renderPost(post, postTitle, postBody);

        const comments = await fetchPostComments(postId);
        renderComments(comments, commentsContainer);
    }
});
