const isName = document.querySelector('input');
const sendName = document.querySelector('button');
const isContent = document.querySelector('div');
const serverUrl = 'https://api.genderize.io';
sendName.addEventListener('click', () => findGender(isName.value));

function findGender(firstName) {
    if (!firstName) return;
    const url = `${serverUrl}?name=${firstName}`;
    const response = fetch(url);
    const promise = response.then((response) => response.json());
    const firstNameWithCapitalLetter = firstName[0].toUpperCase() + firstName.slice(1);
    promise.then((result) => isContent.textContent = `${firstNameWithCapitalLetter}` + ' - ' + `${result.gender}`);
    isName.value = '';
    event.preventDefault();
}
