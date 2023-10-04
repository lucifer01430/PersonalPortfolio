alert("Welcome To Harsh's Portfolio Website.");

//WEBSITE SECURITY

//Prevent Right Click
document.oncontextmenu = function() { 
    alert("Right Click is Disabled By Owner ")
    return false;
 }


 //Still anyone can inspect elements by F12 key. View Page source by Ctrl + U key. Copy by Ctrl + C and also Do Paste By Ctrl + V. Let's Prevent This
 document.onkeydown = e => {
    //Prevent F12 key
    if(e.key == "F12"){
        alert('You are not allowed to inspect elements of this website !');
        return false;

    }

//Prevent Showing Page Source By Ctrl + U
if (e.ctrlKey && e.key === "u") {

    alert('View Page Source Disabled By The Ownner.');
        return false;
}

//Prevent Copying Anything From The Page
if(e.ctrlKey &&  e.key == "c")
{
    alert("Don't Try To Copy Page Elements.")
    return false;
}

//Prevent Paste Anything From Other Source

if(e.ctrlKey && e.key == "v")
{
    alert("Don't Try To Paste Anything To Page.")
    return false;
}

 }











//Typeriter Effects
var typed = new Typed(".text", {
    strings:["Fresher", "Frontend Developer", "Youtuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true
});



//toggele icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll=()=>{
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top>= offset && top < offset + height){
   //active navbar links
   navLinks.forEach(links => {
    links.classList.remove('active');
    document.querySelector('header nav a[href*='+ id +']').classList.add('active');

   });
//    active sections for animation on scroll
        sec.classList.add('show-animate');
        
    }
    // if want to use animation that repeats on scroll use this
    else{
        sec.classList.remove('show-animate');
    }
});

//sticky header
let header=document.querySelector('header');

header.classList.toggle('sticky',window.scrollY>100);

//remove toggle icon and navbar when click navbar link (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// animation footer on scroll
let footer =document.querySelector('footer');

footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}
