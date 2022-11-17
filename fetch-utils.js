const SUPABASE_URL = 'https://njqdydcjmajdjmyztzov.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qcWR5ZGNqbWFqZGpteXp0em92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMjAsImV4cCI6MTk4MzY4NDAyMH0.r6bSNSp-6Ts4GRV3-pnwjFMUWdUGlWU4EiIWbDqrTXU';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchPosts() {
    const query = client.from('bulletin_board').select('*').order('id').limit(100);
    const response = await query;
    return response.data;
}

export async function submitPost(title, body, contact) {
    await client.from('bulletin_board').insert([{ title: title, body: body, contact: contact }]);
    return (window.location.href = '../');
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}


export async function checkAuth() {
    if (await getUser()) return;
    return (window.location.href = '../');
}

export async function redirectIfLoggedIn() {}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '../');
}
