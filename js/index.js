const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `&copy Tatyana Li, ${thisYear}`;
footer.appendChild(copyright);

//Adding Skills

const skills = ['HTML', 'Javascript', 'GitHub']
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
    removeButton.innerHTML = "Remove";
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