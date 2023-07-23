let sections = document.querySelectorAll('section');
let navbarLinks = document.querySelectorAll('linkList linkListTitle li');

window.onscroll = () =>{
    sections.forEach( (section) =>{
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        console.log(id);

        if(top >= offset && top < offset + height){
            navbarLinks.forEach((link) =>{
                link.classList.remove('active');
                document.querySelector('linkList linkListTitle li['+ id +']').classList.add('active')
            });
        }
    });
}
