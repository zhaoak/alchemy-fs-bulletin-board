import { submitPost, getUser, checkAuth } from '../fetch-utils.js';

const form = document.getElementById('post');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // create pretty object
    const data = {
        title: formData.get('title'),
        body: formData.get('body'),
        contact: formData.get('contact'),
        checkbox: formData.get('use-email'),
    };
    // check if the user selected use my email, and get their email if so
    if (data.checkbox) {
        data.contact = getUser().email;
    }
    // pass post data to supabase lib
    submitPost(data.title, data.body, data.contact);
});

checkAuth();
