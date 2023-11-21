const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

const skillsSection = document.getElementById('skills');
const skills = ['HTML5', 'CSS', 'JavaScript', 'Teamwork', 'Problem Solving', 'Algorithms' ];
const skillsList = skillsSection.querySelector('ul');



copyright.innerHTML = `Jose Izquierdo ${thisYear}`;
footer.appendChild(copyright);

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}
