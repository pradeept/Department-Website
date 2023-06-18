const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(links => {
    console.log(links);
    if(links.href.includes(`${activePage}`)){
        links.classList.add('active');
    }
});
