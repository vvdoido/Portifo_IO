$(document).on('click', '.carousel-control-prev, .carousel-control-next', function (event) {
    event.preventDefault();  
    $('html, body').scrollTop($(window).scrollTop());
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 70; 

        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('scroll', function() {
    const profilePicSmall = document.getElementById('profile-pic-small');
    const profilePicLarge = document.getElementById('profile-pic-large');
    const profileSection = document.querySelector('.profile');
    const rect = profileSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
        profilePicSmall.style.opacity = '0';  
        profilePicLarge.style.opacity = '1';  
        profilePicLarge.style.transform = 'translateY(0)';  
    } else {
        profilePicSmall.style.opacity = '1';  
        profilePicLarge.style.opacity = '0';  
        profilePicLarge.style.transform = 'translateY(50px)';  
    }
});
