const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');
let contacts = [];

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const newContact = { name, phone, email };
    contacts.push(newContact);
    renderContacts();
    contactForm.reset();
});

function renderContacts() {
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${contact.name} - ${contact.phone} - ${contact.email}</span>
            <button class="edit-btn" onclick="editContact(${index})">Editar</button>
            <button class="delete-btn" onclick="deleteContact(${index})">Excluir</button>
        `;
        contactList.appendChild(li);
    });
}

function editContact(index) {
    const contact = contacts[index];
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;
    
    contacts.splice(index, 1); // Remove o contato para evitar duplicação
    renderContacts();
}

function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}
