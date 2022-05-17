$('.move-to-top').click(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
// menu hamburger
$('#menu-btn').click(function () {
    let ClassName = $('#menu').attr('class')
    if (ClassName === "menu") {
        $('#menu').attr('class', 'showMenu')
        $('#hamburg').attr('class', 'fas fa-times')
    } else {
        $('#menu').attr('class', 'menu')
        $('#hamburg').attr('class', 'fas fa-bars')
    }
})
// check scroll 
function applyPulse() {
    var hT = $('.--card-1').offset().top,
        hH = $('.--card-1').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
        $('.--card-1').attr('class', '--card-1 animate__animated animate__animated animate__pulse');
    }
}
let [limit, count] = [1, 0];
$(function () {
    let $win = $(window);
    $win.scroll(function () {
        if ($win.scrollTop() == 0) {
            $('.move-to-top').hide();
            count++;
            if (count == limit) {
                applyPulse()
                count = 0;
            }
        }
        else if ($win.height() + $win.scrollTop()
            <= $(document).height()) {
            $('.move-to-top').show();
            if (count == limit) {
                applyPulse()
                count = 0;
            }
        }
    });
});
// scroll effects
// $(window).scroll(function () {
//     var hT = $('.--card-1').offset().top,
//         hH = $('.--card-1').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//     console.log((hT - wH), wS);
//     if (wS > (hT + hH - wH)) {
//         $('.--card-1').attr('class', '--card-1 animate__animated animate__pulse')
//     }
// });