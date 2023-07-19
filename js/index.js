const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `&copy Tatyana Li, ${thisYear}`;
footer.appendChild(copyright);

//Adding Skills

const skills = ['HTML', 'JavaScript', 'GitHub', 'CSS']
const skillsSection = document.getElementById("skills")

skillsList = skillsSection.querySelector('ul')

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li')
  skill.innerHTML = `${skills[i]}`
  skillsList.appendChild(skill)
}

//Adding Messages
const messageSection = document.getElementById('messages');
const messageForm = document.getElementsByName('leave_message');

//Adding event listener
 messageForm.item(0).addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    //Creating messages in the list
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = `<a href="mailto: ${email}">${name}</a> wrote: <span>${message}</span>`;

    //Creating remove button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', () => {
      const entry = removeButton.parentNode;
      entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageSection.style.display = "block";
    messageForm.item(0).reset();
});

//Adding JSON/AJAX project link
  let githubRequest = new XMLHttpRequest();
  githubRequest.open('GET', 'https://api.github.com/users/litatyana1/repos');
  githubRequest.send();

  githubRequest.addEventListener('load', function () {
  let repositories = JSON.parse(githubRequest.response);
  console.log(repositories);
  

  let projectSection = document.getElementById("projects");
  let projectList = projectSection.querySelector('ul')
  for (let i = 0; i < repositories.length; i++ ) {
  const project = document.createElement('li')
  project.innerHTML += `<a href = "${repositories[i].html_url}" target="_blank"> ${repositories[i].name} </a>`;
  projectList.appendChild(project);
  }
  }
  );

//   /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "main-nav") {
//     x.className += " responsive";
//   } else {
//     x.className = "main-nav";
//   }
// }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}