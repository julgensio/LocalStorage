const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const buttonSave = document.querySelector('.button-save');
const buttonDelete = document.querySelector('.button-delete');

const saveStorageInput = localStorage.getItem('textInput');
const deleteStoredInput = localStorage.removeItem('textInput');

if (saveStorageInput !== null) {
	text.textContent = saveStorageInput;
}

// Letter change the value
storageInput.addEventListener('input', (letter) => {
	text.textContent = letter.target.value;
});

// Save input to local storage
const saveToLocalStorage = () => {
	localStorage.setItem('textInput', text.textContent);
};

// Delete item from localStorage
const deleteItem = () => {
	if (deleteStoredInput == null) {
		localStorage.removeItem('textInput');
	}
};

buttonSave.addEventListener('click', saveToLocalStorage);
buttonDelete.addEventListener('click', deleteItem);
