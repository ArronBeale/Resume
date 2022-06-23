/**
 * this is the template from emailjs to send the form to my Gmail.
 * service is created to allow site visitors to submit feedback or get in touch with me.
 * more info on emailjs (https://www.emailjs.com/)
 */
 (function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('mcd7Qd9Dhv9KI6qxp');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
};