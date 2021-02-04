   // Toggle Icone hamburger
   $(document).ready(function(){
    $('.barres').click(function(){
        $('.barres').toggleClass('active');
    })
})


// Greensock Animations

var timeline = new TimelineMax();

timeline.to(".menu", 1.5, {left: '0%',ease: Expo.easeInOut, delay: -1.5});
timeline.staggerFrom(".menu ul li", 0.4, {x: -100, opacity: 0}, 0.1);

timeline.reverse();

$(document).on('click', '.barres', function(){
    timeline.play();
});
$(document).on('click', 'a', function(){
    timeline.reverse();
    $('.barres').toggleClass('active');
})