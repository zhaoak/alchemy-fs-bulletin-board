export function renderBoardPost(post) {
    const div = document.createElement('div');
    const title = document.createElement('h3');
    const body = document.createElement('p');
    const contact = document.createElement('h6');

    title.textContent = post.title;
    body.textContent = post.body;
    contact.textContent = post.contact;

    div.classList.add('post');
    div.append(title, body, contact);
    return div;
}
