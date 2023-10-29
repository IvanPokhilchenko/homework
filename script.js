const postsContainer = document.querySelector('.posts');
const commentsContainer = document.querySelector('.comments');
const usersButton = document.querySelector("#usersButton");
const userSelect = document.querySelector("#userSelect");
const addPostButton = document.querySelector("#addPostButton");
const addCommentButton = document.querySelector("#addCommentButton");

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}

async function fetchUserPosts(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    return posts;
}

async function fetchPostComments(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments = await response.json();
    return comments;
}


function clearPosts() {
    postsContainer.innerHTML = '';
}

function clearComments() {
    commentsContainer.innerHTML = '';
}

async function displayUsers() {
    const users = await fetchUsers();

    userSelect.innerHTML = '<option value="">Выберите пользователя</option>';

    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.name;
        userSelect.appendChild(option);
    });

    userSelect.disabled = false;
    addPostButton.disabled = false; 
    addCommentButton.disabled = false; 
}

async function addPost(userId) {
    if (userPosts.length === 0) {
        userPosts = await fetchUserPosts(userId);
    }

    if (postIndex < userPosts.length) {
        const post = userPosts[postIndex];
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);

        postIndex++;
    }
}

async function addComment() {
    if (userPosts.length === 0) {
        return;
    }

    if (commentIndex < userPosts.length) {
        if (userComments.length === 0) { 
            const post = userPosts[commentIndex];
            userComments = await fetchPostComments(post.id);
        }

        if (commentIndex < userComments.length) {
            const comment = userComments[commentIndex];
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <h5>${comment.name}</h5>
                <p>${comment.body}</p>
            `;
            commentsContainer.appendChild(commentElement);

            commentIndex++;
        }
    }
}

usersButton.onclick = () => {
    displayUsers();
}

userSelect.onclick = () => {
        userPosts = [];
        userComments = []; 
        postIndex = 0; 
        commentIndex = 0; 
        clearPosts();
        clearComments();

}

addPostButton.onclick = () => {
    addPost(userSelect.value);
}

addCommentButton.onclick = () => {
    addComment();
}

