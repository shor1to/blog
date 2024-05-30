export async function fetchPostData(postId) {
    const postResponse = await fetch(`https://gorest.co.in/public-api/posts/${postId}`);
    const postData = await postResponse.json();
    return postData.data;
}

export async function fetchPostComments(postId) {
    const commentsResponse = await fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`);
    const commentsData = await commentsResponse.json();
    return commentsData.data;
}
