
  // accordion
  bulmaCollapsible.attach();
  // accordion end


  // carousel
  bulmaCarousel.attach('#carousel', {
    slidesToScroll: 1,
    slidesToShow: 3
  });
  bulmaCarousel.attach('#carousel-video', {
    slidesToScroll: 1,
    slidesToShow: 3
  });
  bulmaCarousel.attach('#carousel-card', {
    slidesToScroll: 1,
    slidesToShow: 3
  });
  // carousel end


  // tabs script
  function tabs(e) {
    var siblings = e.currentTarget.parentNode.querySelectorAll("li");
    for (var i=0; i<siblings.length; i++) {
      siblings[i].classList.remove("is-active");
    }
    e.currentTarget.classList.add("is-active");
    var index = Array.prototype.slice.call(siblings).indexOf(e.currentTarget);
    var tabs = e.currentTarget.parentNode.parentNode.parentNode.querySelectorAll(".tab div");
    for (var i=0; i<tabs.length; i++) {
      tabs[i].classList.add("is-hidden");
    }
    tabs[index].classList.remove("is-hidden");
  }
  // tabs script end


  // modal script
  var modal = document.querySelector('.modal'); 
  var modalBtn = document.querySelector('.modal-button');
  var modalClose = document.querySelector('.modal-close');
  var modalCancel = document.querySelector('.modal-cancel');

  modalBtn.addEventListener('click', function () { modal.style.display = 'flex' });
  modalClose.addEventListener('click', function () { modal.style.display = 'none' });
  modalCancel.addEventListener('click', function () { modal.style.display = 'none' });

  window.addEventListener('click', function (event) { 
    if (event.target.className === 'modal-background') { 
      modal.style.display = 'none' 
    } 
  });
  // modal script


  // burger menu script
  document.addEventListener('DOMContentLoaded', function() {
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( function(el) {
        el.addEventListener('click', function() {
          var target = el.dataset.target;
          var $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });
  // burger menu script end
