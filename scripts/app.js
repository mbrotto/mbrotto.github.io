(function (app){

   app.pageItems = {};

   app.index = function() {
      app.pageItems.contactForm = document.getElementById('contact-form');
      app.pageItems.contact.name = contactForm.querySelector('#name');
      app.pageItems.email = contactForm.querySelector('#email');
      app.pageItems.message = contactForm.querySelector('#message');
      app.pageItems.contactForm.onsubmit = contactFormSubmit();
      // app.pageItems.skillsDiv = document.getElementById('skills');
      app.pageItems.skillsUl = document.querySelector('#skills ul');
   };

   function contactFormSubmit(e) {
      e.preventDefault();

      const mailTo = `mailto:${app.pageItems.email.value}?subject=Contact From ${app.pageItems.name.value}&body=${app.pageItems.message.value}`;
      window.open(mailTo);

      app.pageItems.name.value = '';
      app.pageItems.email.value = '';
      app.pageItems.message.value = '';
   }

   app.addSkills = async function() {
      const skills = await fetch('skills.json');
      //const rawData = await fetch('sitedata.json');
      const data = await skills.json();

      for (let i = 0; i < data.skills.length; i++) {
         console.log(data.skills[i]);
         for (let j = 0; j < data.skills[i].length; j++) {
            console.log('inner for loop');
            console.log(data.skills[i][j]);
            // const element = data.skills[i][j].length     
         }
      }
   }

})(window.app = window.app || {});