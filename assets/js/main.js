$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: "",
    delay: '100'
});

typewriter.typeString('اضطرابات النوم')
    .pauseFor(2700)
    .deleteAll()
    .typeString('الأرق')
    .pauseFor(2000)
    .deleteAll()
    .typeString('الهلع')
    .pauseFor(2000)
    .deleteAll()
    .typeString('التبول اللاإرادي')
    .pauseFor(2000)
    .deleteAll()
    .typeString('الكوابيس')
    .pauseFor(2000)
    .deleteAll()
    .start();
$(document).on('scroll', () => {
    var now = document.documentElement.scrollTop;
    if (now >= 250) {
        $('.up').css('bottom', '4%');
    } else {
        $('.up').css('bottom', '-6%');
    }
})
$('.up').on('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            $('html, body').css('overflow', 'initial');
            $('.navbar-toggler').click()
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 150
                }, 800, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
            $('html, body').css('overflow', 'initial');
        }
    });