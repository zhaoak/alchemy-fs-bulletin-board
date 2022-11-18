/* Imports */
import { fetchPosts, getUser, logout } from './fetch-utils.js';
import { renderBoardPost } from './render-utils.js';

/* Get DOM Elements */
const board = document.getElementById('bulletin-board');
const logoutButton = document.getElementById('logout-button');
const userEmailDisp = document.getElementById('login-email-disp');

/* State */
let postList = [];

/* Events */
window.addEventListener('load', async () => {
    logoutButton.disabled = true;
    // check if user logged in
    if (getUser()) {
        logoutButton.disabled = false;
        userEmailDisp.textContent = `Logged in as ${getUser().email}`;
    }
    postList = await fetchPosts();
    displayPosts();
});

logoutButton.addEventListener('click', async () => {
    logout();
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
