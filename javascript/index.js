/** @format */
// config typed auto
const options = {
  stringsElement: "",
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
};
const preloadTyped = new Typed("#typing-loading", {
  ...options,
  stringsElement: "#typing-loader",
});

const typingDecsJob = new Typed("#typing-decs-job", {
  ...options,
  stringsElement: "#typing-job",
});

// preloader
$(document).ready(function () {
  $(window).load(function () {
    $('.preloader').hide();
    $('.page-content').show();
  });
});



var offset = 200,
  offset_opacity = 20,
  scroll_top_duration = 300,
  $back_to_top = jQuery('.cd-top');
$scoll_down = jQuery('.cd-down');

jQuery(window).scroll(function () {
  // hide/show button to top and button scoll down
  if (jQuery(this).scrollTop() > offset) {
    $back_to_top.addClass('cd-is-visible');
    $scoll_down.removeClass('cd-is-visible cd-fade-out');
  } else {
    $back_to_top.removeClass('cd-is-visible cd-fade-out');
    $scoll_down.addClass('cd-is-visible cd-fade-out');
  }
  if (jQuery(this).scrollTop() > offset_opacity) {
    $back_to_top.addClass('cd-fade-out');
    $scoll_down.removeClass('cd-fade-out');
  }
  //effect header
  if (jQuery(window).scrollTop() > 50) {
    jQuery('#header').addClass('header-fixed');
  }
  else {
    jQuery('#header').removeClass('header-fixed');
  }
});

// press button to top
$back_to_top.on('click', function (event) {
  event.preventDefault();
  jQuery('body,html').animate({
    scrollTop: 0,
  }, scroll_top_duration
  );
});
// press button to scoll down
$scoll_down.on('click', function (event) {
  event.preventDefault();
  jQuery('body,html').animate({
    scrollTop: $('section#about').offset().top - 100,
  }, scroll_top_duration
  );
});

document.getElementById('LinkToAbout').addEventListener('click', () => {
  Element.scroll(0, 1000);
});






// press to open navbar
$(".toggle-btn").on("click", function () {
  $(this).toggleClass("active");
  $(".bar").toggleClass("change");
  $(".sidebar-menu").toggleClass("open");
})


function sendEmail() {
  var sub = document.getElementById("subject").value;
  var mess = document.getElementById("message").value;
  window.open(`mailto:nvnhan93@gmail.com?subject=${sub}&body=${mess}`);
  alert("Thank you for contact! I will contact to you ASAP")
}