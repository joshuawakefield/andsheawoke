document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    // You can use a service like Formspree or EmailJS to handle form submissions
    alert('Thank you for subscribing!'); // Replace this with actual submission logic
});
