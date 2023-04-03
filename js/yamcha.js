// accordion
bulmaCollapsible.attach();
// accordion end

// carousel
bulmaCarousel.attach('#carousel', {
  slidesToScroll: 1,
  slidesToShow: 3,
});
bulmaCarousel.attach('#carousel-video', {
  slidesToScroll: 1,
  slidesToShow: 3,
});
bulmaCarousel.attach('#carousel-card', {
  slidesToScroll: 1,
  slidesToShow: 3,
});
// carousel end

// tabs script
function tabs(e) {
  var siblings = e.currentTarget.parentNode.querySelectorAll('li');
  for (var i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove('is-active');
  }
  e.currentTarget.classList.add('is-active');
  var index = Array.prototype.slice.call(siblings).indexOf(e.currentTarget);
  var tabs =
    e.currentTarget.parentNode.parentNode.parentNode.querySelectorAll(
      '.tab div'
    );
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.add('is-hidden');
  }
  tabs[index].classList.remove('is-hidden');
}
// tabs script end

// modal script
document.addEventListener('DOMContentLoaded', () => {
  function openModal($el) {
    $el.classList.add('is-active');
  }
  function closeModal($el) {
    $el.classList.remove('is-active');
  }
  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);
    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });
  (
    document.querySelectorAll(
      '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
});
// modal script

// burger menu script
document.addEventListener('DOMContentLoaded', function () {
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {
        var target = el.dataset.target;
        var $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
// burger menu script end
