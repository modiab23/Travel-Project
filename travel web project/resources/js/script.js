/* section about */
let about = document.querySelectorAll(".control-btn");
about.forEach(btn => {
    btn.onclick = function() {
        let src = btn.getAttribute('data-src');
        document.querySelector(".video").src = src;
    }
})
/*   section about end  */
/* onclick bars */
function bar() {
   let item = document.querySelectorAll('.untybed-item');
    item.classlist.toggle('active');

}

/* */
let section = document.querySelectorAll('section');
let nav_link = document.querySelectorAll('.untybed-item a');
window.onscroll = function() {
    section.forEach(sec =>{
       
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >=offset && top < offset+height) {
            nav_link.forEach( link =>{
            link.classList.remove('active');
            document.querySelector('.untybed-item a[href*= ' + id +']').classlist.add('active');

            });

        }
    });
}

