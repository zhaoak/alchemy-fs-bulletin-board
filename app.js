/* Imports */
import { fetchPosts, getUser, logout } from './fetch-utils.js';

/* Get DOM Elements */

/* State */

/* Events */
window.addEventListener('load', async () => {
    console.log(await fetchPosts());
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
