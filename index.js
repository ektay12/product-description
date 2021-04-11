var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }



var mainCard = document.getElementById("section");

var product = document.createElement('div');
product.className = "product";


var leftColumn = document.createElement('div');
leftColumn.className = "left-column";

var productImg = document.createElement('img');
productImg.className = "product-img";
productImg.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
leftColumn.appendChild(productImg);

var rightColumn = document.createElement('div');
rightColumn.className = "right-column";
product.appendChild(leftColumn);

var productDescription = document.createElement('div');
productDescription.className = "product-description";
rightColumn.appendChild(productDescription);

var pName = document.createElement('h1');
pName.className = "name";
pName.innerHTML="Men Navy Blue Solid Sweatshirt";
productDescription.appendChild(pName);

var brand = document.createElement('h4');
brand.className = "brand";
brand.innerHTML="United Colors of Benetton";
productDescription.appendChild(brand);

var pPrice = document.createElement('h3'); 
var price = document.createElement('span');
price.className = "price";
var newP = price.innerHTML = "2599";
pPrice.className = "p-price";
pPrice.innerHTML=" Price : Rs ";
pPrice.appendChild(price);
productDescription.appendChild(pPrice);

var description = document.createElement('div');
description.className = "description";
rightColumn.appendChild(description);

var pDescription = document.createElement('h3');
pDescription.className = "h-des";
pDescription.innerHTML = "Description";
description.appendChild(pDescription);

var paraDesc = document.createElement('p');
paraDesc.className = "para";
paraDesc.innerHTML = "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem";
description.appendChild(paraDesc);

var productPreview = document.createElement('div');
productPreview.className = "product-preview";
rightColumn.appendChild(productPreview);

var pPreview = document.createElement('h3');
pPreview.className = "h-des";
pPreview.innerHTML = "Product Preview";
productPreview.appendChild(pPreview);

var previewImg = document.createElement('div');
previewImg.className = "preview-img";
productPreview.appendChild(previewImg);



var pImg = document.createElement('img');
pImg.className = "img0";
pImg.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
previewImg.appendChild(pImg);
var pImg1 = document.createElement('img');
pImg1.className = "img1";
pImg1.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg";
previewImg.appendChild(pImg1);
var pImg2 = document.createElement('img');
pImg2.className = "img2";
pImg2.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg";
previewImg.appendChild(pImg2);
var pImg3 = document.createElement('img');
pImg3.className = "img3";
pImg3.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg";
previewImg.appendChild(pImg3);
var pImg4 = document.createElement('img');
pImg4.className = "img4";
pImg4.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg";
previewImg.appendChild(pImg4);


var btn = document.createElement('div');
btn.className = "btn";
rightColumn.appendChild(btn);

var button = document.createElement('button');
button.className = "add-to-cart";
button.innerHTML = "Add to Cart";
btn.appendChild(button);




product.appendChild(rightColumn);

console.log(product);

mainCard.appendChild(product);

pImg.addEventListener('click', function(){ 
    var newImg = document.querySelector('.productImg .productImg.src');
    productImg.src = pImg.src;

})

pImg1.addEventListener('click', function(){ 
    var newImg = document.querySelector('.productImg .productImg.src');
    productImg.src = pImg1.src;

})

pImg2.addEventListener('click', function(){ 
    var newImg = document.querySelector('.productImg .productImg.src');
    productImg.src = pImg2.src;
 
})
pImg3.addEventListener('click', function(){ 
    var newImg = document.querySelector('.productImg .productImg.src');
    productImg.src = pImg3.src;

})
pImg4.addEventListener('click', function(){ 
    var newImg = document.querySelector('.productImg .productImg.src');
    productImg.src = pImg4.src;

})

