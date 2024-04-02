let navLinks = document.querySelectorAll('.nav ');
let mmenu_iitem = document.querySelector("#hide");
let mennnnu = document.getElementById("menu_homePage");
let icons = document.querySelectorAll(".icons ");
let social_media= document.querySelectorAll(".share a");
let img = document.querySelector('.welcomeHome .background img');
let ListImages= ["images/home-bg.jpg",'images/pexels-maxime-francis-2246476.jpg',"images/pexels-irina-iriser-1366957.jpg","images/pexels-rompalli-harish-1698618.jpg","images/pexels-irina-iriser-1707213.jpg","images/pexels-carlos-oliva-3586966.jpg","images/pexels-roberto-nickson-2478248.jpg","images/pexels-piccinng-3075993.jpg","images/pexels-quang-nguyen-vinh-2162459.jpg","images/pexels-aleksandar-pasaric-2341830.jpg"];
let cruuentIndex=0;

console.log(mmenu_iitem); 
console.log(mennnnu); 
console.log(navLinks);


// console.log(mmenu_iitem);
// console.log(social_media);
console.log(mennnnu);
// console.log(icons);
// console.log(navLinks);

let screenWidth = window.innerWidth;
window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    if (screenWidth > 800) {
        mmenu_iitem.style.display = "none";
        mennnnu.style.display = "none";
        navLinks.forEach(link => link.style.display = "flex");
        icons.forEach(icon => icon.style.display = "block");
        social_media.forEach(social => social.style.fontSize = "18px");//help
    } else {
        navLinks.forEach(link => link.style.display = "none");
        icons.forEach(icon => icon.style.display = "none");
        mmenu_iitem.style.display = "flex";//help
    }
});

mmenu_iitem.addEventListener("click", () => {
    if (mennnnu.style.display === "none") {
        mennnnu.style.display = "block";
    } else {
        mennnnu.style.display = "none";
    }
});



setInterval(() => {
    // let randomIndex = Math.floor(Math.random() * ListImages.length);
    img.src = ListImages[cruuentIndex];
    cruuentIndex =(cruuentIndex+1)%ListImages.length;

}, 2000);














