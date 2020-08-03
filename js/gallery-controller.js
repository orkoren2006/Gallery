"use strict"; // Start of use strict

$(document).ready(init);

function init() {
  renderProjs();
}


(function ($) {

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict


function renderProjs() {
  var strHTML = ''
  gProjs.forEach(function (project) {
    strHTML +=
      `<div class="col-md-4 col-sm-6 portfolio-item">
  <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${project.id}')" href="#portfolioModal">
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
  </a>
  <div class="portfolio-caption">
    <h4>${project.name}</h4>
    <p class="text-muted">Illustration</p>
  </div>
</div>`
    console.log(project.id);
  })
  $('#projects').html(strHTML)
}


function renderModal(modalId) {
  var index = gProjs.findIndex(function (project) {
    return modalId == project.id
  })
  console.log(gProjs[index].desc)
  $('.modal-body').html(`
              <h2>${gProjs[index].name}</h2>
              <p class="item-intro text-muted">${gProjs[index].title}.</p>
              <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
              <p>${gProjs[index].desc}</p>
              <ul class="list-inline">
                <li>Date: ${gProjs[index].publishedAt}</li>
                <li>Client: Threads</li>
                <li>Category: Illustration</li>
                <li><a href="projects/${gProjs[index].name}/index.html" target="_blank">${gProjs[index].url}</li>
              </ul>
                 ` )
};


function onSubmitForm() {
  submitForm();
  
  $('#formName').val('');
  $('#formSubject').val('');
  $('#formText').val('');

  openCanvas()
}