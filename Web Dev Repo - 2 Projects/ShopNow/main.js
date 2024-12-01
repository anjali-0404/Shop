// Special Countdown 
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
    let futureDate = new Date("30 July 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000)

document.addEventListener('DOMContentLoaded', function() {
    function scrollTopBack() {
        let scrollTopButton = document.querySelector("#scrollUp");
        window.onscroll = function() {
            var scroll = document.documentElement.scrollTop;
            if (scroll >= 250) {
                scrollTopButton.classList.add('scrollActive');
            } else {
                scrollTopButton.classList.remove('scrollActive');
            }
        }
        scrollTopButton.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
    scrollTopBack();
});


$(document).ready(function(){
    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop();
        $('section').each(function() {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();
            if (scrollPosition >= top && scrollPosition <= bottom) {
                var id = $(this).attr('id');
                $('nav').find('.nav-link').removeClass('active-section');
                $('nav').find('[href="#' + id + '"]').addClass('active-section');
            }
        });
    });
});
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var sections = document.querySelectorAll('section');
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    sections.forEach(function(section, index) {
        if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight - 100) {
            navbarLinks.forEach(function(navbarLink) {
                navbarLink.classList.remove('active');
            });
            navbarLinks[index].classList.add('active');
        }
    });
});

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

