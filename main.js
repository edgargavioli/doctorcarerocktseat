window.addEventListener('scroll', onScroll) /*Adicionando a scroll na windown*/ 

onScroll();

function onScroll() {
    showNavOnScroll()
    showBackToTopButton()
  }

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
   
  function openMenu() {
    document.body.classList.add('menu-expanded')
  }
  
  function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }

  function showBackToTopButton() {
    if (scrollY > 500) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }
  
  ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
  }).reveal(`#home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about,
    #about header,
    #about .content,
    footer,
    footer .logo,
    footer .social-links`);