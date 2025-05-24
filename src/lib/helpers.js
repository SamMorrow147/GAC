import $ from "jquery";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function doAnimations(elements) {
  var animationEndEvents =
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  elements.each(function () {
    var $this = $(this);
    var $animationDelay = $this.data("delay");
    var $animationType = "animated " + $this.data("animation");
    $this.css({
      "animation-delay": $animationDelay,
      "-webkit-animation-delay": $animationDelay,
    });
    $this.addClass($animationType).one(animationEndEvents, function () {
      $this.removeClass($animationType);
    });
  });
}

export function initSmoothScrolling() {
  // Select all links with hash (#) in href attribute
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
        window.location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          
          // Close mobile menu if open
          $("body").removeClass("mobile-menu-visible");
          
          // Calculate offset - use smaller offset on mobile
          var headerOffset = $(window).width() < 768 ? 50 : 70;
          
          // Instant jump to target section instead of animation
          window.scrollTo({
            top: target.offset().top - headerOffset,
            behavior: 'auto' // Use 'auto' for instant jump
          });
          
          // Focus on target element
          var $target = $(target);
          $target.focus();
          // Check if the target was focused
          if (!$target.is(":focus")) {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        }
      }
    });
}
