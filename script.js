const logoLink = document.querySelector('.logo-link');

logoLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
