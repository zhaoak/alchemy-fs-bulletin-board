import { getUser, signUpUser, signInUser, redirectIfLoggedIn } from '../fetch-utils.js';

// grab doms
const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');
const errorMessage = document.getElementById('error');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);

    if (await signInUser(formData.get('username'), formData.get('password'))) {
        location.replace('../');
    } else {
        errorMessage.textContent = 'Could not sign in.';
    }
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);

    if (formData.get('password') !== formData.get('confirm-password')) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    const userData = await signUpUser(formData.get('username'), formData.get('password'));
    console.log(userData);

    if (userData) {
        location.replace('../');
    } else {
        errorMessage.textContent = 'Problem making an account.';
    }
});
