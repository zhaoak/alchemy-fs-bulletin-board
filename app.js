/* Imports */
import { fetchPosts, getUser, logout } from './fetch-utils.js';
import { renderBoardPost } from './render-utils.js';

/* Get DOM Elements */
const board = document.getElementById('bulletin-board');

/* State */
let postList = [];

/* Events */
window.addEventListener('load', async () => {
    postList = await fetchPosts();
    displayPosts();
});

/* Display Functions */
function displayPosts() {
    board.textContent = '';
    for (const post of postList) {
        const newPost = renderBoardPost(post);
        board.append(newPost);
    }
}

// (don't forget to call any display functions you want to run on page load!)
