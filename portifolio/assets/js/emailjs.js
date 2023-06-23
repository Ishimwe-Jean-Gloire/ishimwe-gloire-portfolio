function sendMail() {
    var params = {
        from_name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    emailjs.send("service_froih2d", "template_rr1ltf6", params).then(function(res) {
        alert("success", +res.status);
    })
}

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display success message
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.innerHTML = 'Thank you for your message! We will get back to you soon.';
    form.appendChild(successMessage);
})