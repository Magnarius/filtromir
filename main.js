$(function () {
  var $burger = $('#burgerBtn');
  var $menu = $('#mainMenu');
  var $overlay = $('#mobileMenuOverlay');
  var $closeBtn = $('#closeMobileMenu');
  function openMenu() {
    $menu.addClass('open').attr('aria-hidden', 'false');
    $overlay.show();
    $burger.addClass('open').attr('aria-expanded', 'true');
  }
  function closeMenu() {
    $menu.removeClass('open').attr('aria-hidden', 'true');
    $overlay.hide();
    $burger.removeClass('open').attr('aria-expanded', 'false');
    $('body').css('overflow', '');
  }
  function toggleMenu() {
    if ($menu.hasClass('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  $burger.on('click keydown', function (e) {
    if (
      e.type === 'click' ||
      (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))
    ) {
      toggleMenu();
    }
  });
  $overlay.on('click', closeMenu);
  if ($closeBtn && $closeBtn.length) {
    $closeBtn.on('click', closeMenu);
  }
  // Close on ESC
  $(document).on('keydown', function (e) {
    if ($menu.hasClass('open') && e.key === 'Escape') {
      closeMenu();
    }
  });

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
