window.addEventListener('scroll', onScroll) /*Adicionando a scroll na windown*/ 

onScroll();

function onScroll() {
    showNavOnScroll()
    showBackToTopButton()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
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

  function activateMenuAtCurrentSection (section) {
     const targetLine = scrollY + innerHeight / 2
     
     const sectionTop = section.offsetTop
     const sectionHeight = section.offsetHeight

     const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

     const sectionEndsAt = sectionTop + sectionHeight

     const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

     const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

     const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

    menuElement.classList.remove('active')

     if (sectionBoundaries) {
      menuElement.classList.add('active')
     }
      /* 0 Inicio -- 831 Services --
       Sobre -- 2664.5 agende
     */
  }