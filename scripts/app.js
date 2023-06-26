(function (app){

   app.pageItems = {};

   app.index = function() {
      app.pageItems.contactForm = document.getElementById('contact-form');
      app.pageItems.contactName = app.pageItems.contactForm.querySelector('#name');
      app.pageItems.contactEmail = app.pageItems.contactForm.querySelector('#email');
      app.pageItems.contactMessage = app.pageItems.contactForm.querySelector('#message');
      app.pageItems.contactForm.onsubmit = contactFormSubmit;
      // app.pageItems.skillsDiv = document.getElementById('skills');
      app.pageItems.skillsUl = document.querySelector('#skills ul');
   };

   function contactFormSubmit(e) {
      e.preventDefault();

      const mailTo = `mailto:${app.pageItems.contactEmail.value}?subject=Contact From ${app.pageItems.contactName.value}&body=${app.pageItems.contactMessage.value}`;
      window.open(mailTo);

      app.pageItems.contactName.value = '';
      app.pageItems.contactEmail.value = '';
      app.pageItems.contactMessage.value = '';
   }

   app.addSkills = async function() {
      const skills = await fetch('skills.json');
      //const rawData = await fetch('sitedata.json');
      const data = await skills.json();

      data.skills.forEach(element => {
         Object.entries(element).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
            const skill = document.createElement('li');
            skill.innerText = key;
            const skillChildren = document.createElement('ul');
            skillChildren.classList.add('list-second');
            value.forEach(val => {
               console.log(`Value is: ${val}`);
               const skillChild = document.createElement('li');
               skillChild.innerText = val;
               skillChildren.appendChild(skillChild);
            });
            skill.appendChild(skillChildren);
            app.pageItems.skillsUl.appendChild(skill);
         });
      });

   }

})(window.app = window.app || {});