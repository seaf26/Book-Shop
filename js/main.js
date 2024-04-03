let navBar = document.getElementById("navBar");
let ul = document.getElementsByTagName("ul")[0];
let icon = document.querySelectorAll(".icon i")[0];
let addProduct = document.getElementById("submit");
let menutest = document.querySelector(".menu_item ");//good
let Products = [];


if(addProduct!=null){
if (localStorage.getItem("Products")) {
    Products = JSON.parse(localStorage.getItem("Products"));
    loopData();
}

addProduct.addEventListener("click", function () {
    let theProducts = {
        ProductName: ProductName.value,
        ProductPrice: ProductPrice.value,
        file: file.value,
    };
    Products.push(theProducts);
    loopData();
    localStorage.setItem("Products", JSON.stringify(Products));
    clear();
});



function loopData() {
    let theUsers = ``;
    for (let i = 0; i < Products.length; i++) {
        theUsers += `
                
                <div class="product">
                    <img src="${Products[i].file}.jpg" alt="" />
                    <h3>${Products[i].ProductName}</h3>
                    <p>Price: ${Products[i].ProductPrice}</p>
                    <button id="add" onclick="AddToCard(${i})">Add To Card</button>
                    <button onclick="deleteProduct(${i})">Delete</button>
                    <button  onclick="updateProduct(${i})">Update</button>
                </div>
           
                `;
            }
            document.getElementById("seaf").innerHTML = theUsers;
}
}


let mmenu_iitem = document.querySelector(".menu_item");
let mennnnu = document.getElementById("menu");

let ProductName = document.getElementById("ProductName");
let ProductPrice = document.getElementById("ProductPrice");
let file = document.getElementById("file");

function deleteProduct(index) {
    Products.splice(index, 1);
    loopData();
    localStorage.setItem("Products", JSON.stringify(Products));

}
let UpdateProduct = document.getElementById("update");

function updateProduct(index) {
    ProductName.value = Products[index].ProductName;
    ProductPrice.value = Products[index].ProductPrice;
    UpdateProduct.style.display = "flex";

    // file.value = Products[index].file;

    UpdateProduct.addEventListener("click", () => {
        Products[index].ProductName = ProductName.value;
        Products[index].ProductPrice = ProductPrice.value;
        Products[index].file = file.value;
        localStorage.setItem("Products", JSON.stringify(Products));
        UpdateProduct.style.display = "none";
        
        loopData();
        clear();

    });
}

function clear() {
    ProductName.value = "";
    ProductPrice.value = "";
    file.value = "";
}






let screenWidth = window.innerWidth;
window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    if (screenWidth > 800) {
        menutest.style.display = "none";
        mennnnu.style.display = "none";
        ul.style.display = "flex";
    } else {
        menutest.style.display = "flex";
        ul.style.display = "none";
    }
});

menutest.addEventListener("click", () => {
    if (mennnnu.style.display === "none") {
        mennnnu.style.display = "block";
    } else {
        mennnnu.style.display = "none";
    }
});



