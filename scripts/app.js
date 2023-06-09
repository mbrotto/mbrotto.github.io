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
      app.pageItems.workExperienceTable = document.querySelector('#work-experience table')
   };

   function contactFormSubmit(e) {
      e.preventDefault();

      const mailTo = `mailto:${app.pageItems.contactEmail.value}?subject=Contact From ${app.pageItems.contactName.value}&body=${app.pageItems.contactMessage.value}`;
      window.open(mailTo);

      app.pageItems.contactName.value = '';
      app.pageItems.contactEmail.value = '';
      app.pageItems.contactMessage.value = '';
   }

   app.addSkills = async function(rootUlElement) {
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
            rootUlElement.appendChild(skill);
         });
      });
   }

   app.addExperience = async function() {
      const experience = await fetch('experience.json');
      const data = await experience.json();

      app.pageItems.workExperienceTable.removeChild(app.pageItems.workExperienceTable.getElementsByTagName('tbody')[0]);
      const new_tbody = document.createElement('tbody');

      data.forEach(el => {
         const tr = document.createElement('tr');
         let td = document.createElement('td');
         td.innerText = el.Company;
         tr.appendChild(td);
         td = document.createElement('td');
         td.innerText = el.Location;
         tr.appendChild(td);
         td = document.createElement('td');
         td.innerText = el.Start;
         tr.appendChild(td);
         td = document.createElement('td');
         td.innerText = el.End;
         tr.appendChild(td);   
         new_tbody.appendChild(tr);
      });
      app.pageItems.workExperienceTable.appendChild(new_tbody);
   }

})(window.app = window.app || {});