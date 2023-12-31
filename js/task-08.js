const form = document.querySelector('.login-form');

const formSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if ((email.value === "") || (password.value === "")) {
        alert(`Увага! Усі поля повинні бути заповнені!`);
    } else {
        const data = {
            email: email.value,
            password: password.value,
        };
        console.log(data);
        event.currentTarget.reset();
    };
};

form.addEventListener("submit", formSubmit);