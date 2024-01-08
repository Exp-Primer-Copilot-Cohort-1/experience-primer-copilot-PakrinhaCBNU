function skillsMember() {
  const member = document.querySelector('.member');
  if (member) {
    const memberSkills = document.querySelector('.member__skills');
    const memberSkillsList = document.querySelector('.member__skills-list');
    const memberSkillsBtn = document.querySelector('.member__skills-btn');

    memberSkillsBtn.addEventListener('click', () => {
      memberSkills.classList.toggle('member__skills--active');
      memberSkillsBtn.classList.toggle('member__skills-btn--active');
      memberSkillsList.classList.toggle('member__skills-list--active');
    });
  }
}