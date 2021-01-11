$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
var app = document.getElementById('typewriter');











var w = 0;
var ti = 0;
var words =['اضطرابات النوم', 'الأرق', 'الكوابيس'];
var Rspeed = 150;
var Dspeed = 110;
var d = 0;
pause = false;

function typeWriter() {
    if (ti > words.length) {
        //
    }
    if (w < words[ti].length) {
        document.getElementById("typewriter").innerHTML += words[ti].charAt(w);
        w++;
        
    } else {
        ti++;
    }
}
setInterval( () => {
    if (!pause) {
        console.log(w, ti)
        if (ti >= words.length) {
            console.log('bigger')
            pause = true
            setTimeout(() => {
                ti = 0;
                pause = false
            }, 800)
        } else {
            if (w < words[ti].length) {
                document.getElementById("typewriter").innerHTML += words[ti].charAt(w);
                w++;
                
            } else {
                pause = true
                console.log('paused')
                d = words[ti].length
                console.log(d)
                dpause = false
                setTimeout(() => {
                    del = setInterval( () => {
                        if (!dpause) {
                            if (d < 0) {
                                dpause = true
                                console.log('next word')
                                d = 0;
                                ti++;
                                w = 0;
                                pause = false
                                console.log('resume')
                                clearInterval(del)
                            } else {
                                console.log('dding')
                                document.getElementById("typewriter").innerHTML =  document.getElementById("typewriter").innerHTML.substring(0, document.getElementById("typewriter").innerHTML.length - 1);
                                d--;
                            }
                        }
                    }, Dspeed);
                }, 1000)
                
            }
        }
    }
    
}, Rspeed)
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