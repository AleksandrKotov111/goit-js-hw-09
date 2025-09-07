let formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

const saved = localStorage.getItem(localStorageKey);
if (saved) {
    formData = JSON.parse(saved);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
}

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    ev.preventDefault();
    const email = event.target.email.value;
    const message = event.target.message.value;
    if (email === '' || message === '') {
    return alert('Fill please all fields');
    }

    localStorage.removeItem(localStorageKey);

    console.log(formData);
    form.reset();
    formData = {
    email: '',
    message: '',
    };
}); 