const menu = document.querySelector ('.hamburger');
menu.addEventListener('click', () => 
document.querySelector ('.mainmenu').classList.toggle ('show'));

// window.addEventListener('scroll', () => {
//     const nav = document.querySelector ('.mainmenu');
//     nav.style.transform = 'translateX (-500px)';
// });
