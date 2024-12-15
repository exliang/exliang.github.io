
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', event => {   
        if (link.classList.contains('home') || link.classList.contains('name')) {
            window.location.href = 'home.html';
        }
		else if (link.classList.contains('portfolio')) {
            window.location.href = 'portfolio.html';
        }
		else if (link.classList.contains('contact')) {
            window.location.href = 'contact.html';
        }
		else if (link.classList.contains('about')) {
            window.location.href = 'about.html';
        }
		else if (link.classList.contains('experience')) {
            window.location.href = 'experience.html';
        }
    });
});

window.addEventListener("scroll", function () {
	const navbar = document.querySelector(".navbar");
	
	if (window.scrollY > 50) { /*large than 50px, scroll*/
	  navbar.classList.add("scrolled");
	} 
	else {
	  navbar.classList.remove("scrolled");
	}
});
