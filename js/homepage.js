let navLinks = document.querySelector('.nav ');
let sandwich = document.getElementById('special');
let icons = document.querySelectorAll(".icons ");
let social_media= document.querySelectorAll(".share a");
let img = document.querySelector('.welcomeHome .background img');
let ListImages= ["images/home-bg.jpg",'images/pexels-maxime-francis-2246476.jpg',"images/pexels-irina-iriser-1366957.jpg","images/pexels-rompalli-harish-1698618.jpg","images/pexels-irina-iriser-1707213.jpg","images/pexels-carlos-oliva-3586966.jpg","images/pexels-roberto-nickson-2478248.jpg","images/pexels-piccinng-3075993.jpg","images/pexels-quang-nguyen-vinh-2162459.jpg","images/pexels-aleksandar-pasaric-2341830.jpg"];
let cruuentIndex=0;
let Datas=[]

if(window.localStorage.getItem("Products") !== null){
    Datas=JSON.parse(window.localStorage.getItem("Products"))
    loopData();
}



function loopData() {
    let theUsers = ``;
    for (let i = 0; i < Datas.length; i++) {
        theUsers += `
                
                <div class="product">
                    <img src="${Datas[i].file}.jpg" alt="" />
                    <h3>${Datas[i].ProductName}</h3>
                    <p>Price: ${Datas[i].ProductPrice}</p>
                    <button id="add" onclick="AddToCard(${i})">Add To Card</button>
                </div>
           
                `;
            }
            document.getElementById("seaf").innerHTML = theUsers;
}
loopData();



let screenWidth = window.innerWidth;
window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    if (screenWidth > 800) {
        sandwich.style.display = "none ";
        navLinks.style.display = "flex ";
    } else {
        sandwich.style.display = "flex ";
        navLinks.style.display = "none ";
      
    }
});






setInterval(() => {
    img.src = ListImages[cruuentIndex];
    cruuentIndex =(cruuentIndex+1)%ListImages.length;

}, 2000);














