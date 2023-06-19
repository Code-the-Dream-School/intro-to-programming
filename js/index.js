const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `&copy Tatyana Li, ${thisYear}`;
footer.appendChild(copyright);

//Adding Skills section
const skills = ['Javascript', 'HTML', 'GitHub'];
const skillsSection = document.getElementById("skills");

skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
   skill.innerHTML = `${skills[i]}`;
   skillsList.appendChild(skill);
}
