$(function () {
  // Profile submenu on mobile devices

  const profileTrigger = document.querySelector('.profile-hover');
  const profilePopup = document.querySelector('.profile-popup');

  const isTouchDevice = matchMedia(
    '(hover: none) and (pointer: coarse)'
  ).matches;

  if (isTouchDevice) {
    profileTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      profilePopup.style.display =
        profilePopup.style.display === 'flex' ? 'none' : 'flex';
    });

    document.addEventListener('click', (e) => {
      e.preventDefault();
      profilePopup.style.display = 'none';
    });
  }
});
