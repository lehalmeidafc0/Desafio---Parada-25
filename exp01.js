document.addEventListener('DOMContentLoaded', () => {
    const guestNameInput = document.getElementById('guestName');
    const addGuestButton = document.getElementById('addGuestButton');
    const guestList = document.getElementById('guestList');
    let guests = [];

    addGuestButton.addEventListener('click', () => {
        const name = guestNameInput.value.trim();
        if (name !== '') {
            guests.push(name);
            updateGuestList();
            guestNameInput.value = '';
            guestNameInput.focus();
        }
    });

    function updateGuestList() {
        guestList.innerHTML = '';
        guests.forEach((guest, index) => {
            const li = document.createElement('li');
            li.textContent = guest;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => {
                removeGuest(index);
            });

            li.appendChild(removeButton);
            guestList.appendChild(li);
        });
    }

    function removeGuest(index) {
        guests.splice(index, 1);
        updateGuestList();
    }
});
