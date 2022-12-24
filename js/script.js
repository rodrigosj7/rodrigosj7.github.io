const skillElements = document.querySelectorAll('#skills-list > .skill');
const avaliableSkills = {
  nodejs: {
    title: 'NodeJs',
    content: 'Possuo conhecimento básico'
  },
  python: {
    title: 'Python3',
    content: 'Possuo conhecimento intermediário'
  },
  js: {
    title: 'Javascript',
    content: 'Possuo conhecimento básico/intermediário'
  },
  ts: {
    title: 'Typescript',
    content: 'Possuo conhecimento básico'
  },
  react: {
    title: 'ReactJs',
    content: 'Possuo conhecimento básico'
  },
  html: {
    title: 'HTML5',
    content: 'Possuo conhecimento básico/intermediário'
  },
  css: {
    title: 'CSS3',
    content: 'Possuo conhecimento intermediário'
  },
  sass: {
    title: 'Sass',
    content: 'Possuo conhecimento básico'
  }
}

const setSkillInfo = (e) => {
  let currentlySkillName = e.target['className'].split(' ')
  currentlySkillName = currentlySkillName[currentlySkillName.length - 1]

  const skill = avaliableSkills[currentlySkillName]

  if (!skill) return

  const skillBody = {
    name: document.querySelector('#skill-title'),
    content: document.querySelector('#skill-content')
  }

  skillBody.name.textContent = skill?.title || 'Skill';
  skillBody.content.textContent = skill?.content || 'Conhecimento: ___';
};

Array.from(skillElements).forEach(skill => {
  skill.addEventListener('click', setSkillInfo)
  skill.addEventListener('mouseover', setSkillInfo)
});

// Typing effect
function writter(element) {
  const word = element.textContent.split('')

  element.textContent = ''

  word.forEach((letter, i) => {
    setTimeout(() => 
      element.textContent += letter
    , 104 * i)
  });
}

const element = document.querySelector('#home > div > span')
writter(element)