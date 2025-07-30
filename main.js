document.addEventListener('DOMContentLoaded', () => {
  const isTouchDevice = window.matchMedia(
    '(hover: none) and (pointer: coarse)'
  ).matches;

  if (!isTouchDevice) return;

  const profileTrigger = document.querySelector('.profile-hover');
  const tooltip = profileTrigger.querySelector('.profile-popup');
  const triggerLink = profileTrigger.querySelector('.header-menu-link');

  if (!profileTrigger || !tooltip || !triggerLink) return;

  const togglePopup = () => {
    tooltip.classList.toggle('hidden-popup');
  };

  triggerLink.addEventListener('click', (e) => {
    e.preventDefault();
    togglePopup();
  });

  window.addEventListener('click', (e) => {
    if (!e.target.closest('.profile-hover')) {
      tooltip.classList.add('hidden-popup');
    }
  });
});
