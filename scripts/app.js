(function (app){

   app.pageItems = {};

   app.index = function() {
      app.pageItems.contactForm = document.getElementById('contact-form');
      app.pageItems.contact.name = contactForm.querySelector('#name');
      app.pageItems.email = contactForm.querySelector('#email');
      app.pageItems.message = contactForm.querySelector('#message');
      app.pageItems.contactForm.onsubmit = contactFormSubmit();
   };

   function contactFormSubmit(e) {
      e.preventDefault();

      const mailTo = `mailto:${app.pageItems.email.value}?subject=Contact From ${app.pageItems.name.value}&body=${app.pageItems.message.value}`;
      window.open(mailTo);

      app.pageItems.name.value = '';
      app.pageItems.email.value = '';
      app.pageItems.message.value = '';
   }

})(window.app = window.app || {});