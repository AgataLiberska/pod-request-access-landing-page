const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const emailError = document.querySelector('.js-email-error');

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function showError(error) {
    error.classList.remove('hidden');
}

function removeError(error) {
    error.classList.add('hidden');
}

input.addEventListener('input', e => {
    if (isEmail(input.value)) {
        removeError(emailError);
    }
})

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!isEmail(input.value)) {
        showError(emailError);
    } 
} )

