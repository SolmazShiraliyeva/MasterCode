let search = document.getElementById("search");
let container = document.getElementById("data");
let clothesData;
function clothes() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      clothesData = data;
      displayClothes(data);
    });
}

clothes();
function displayClothes(clothes) {
  container.innerHTML = "";
  clothes.forEach((cloth) => {
    let displayCard = document.createElement("div");
    displayCard.innerHTML = `
    
     <div class="card"'>
     <a href='/fakestore/inform.html?name=${cloth.title}'>
     <img src="${cloth.image}" alt="product-img">
     </a>
     <h2 class="product-name">${cloth.title}</h2>
     <span class="price">${cloth.price} $</span>
 </div>
     
     `;
    container.append(displayCard);
  });
}

search.addEventListener("input", function () {
  let storeData = clothesData.filter((cloth) =>
    cloth.title.toLowerCase().includes(search.value.toLowerCase())
  );
  displayClothes(storeData);
  // console.log(storeData);

  let count = document.querySelector(".count");
  count.textContent = storeData.length;
});

let button = document.getElementById("button");
let options = document.querySelector("#options");
button.addEventListener("click", function () {
  if (options.style.display == "none") {
    options.style.display = "block";
  } else {
    options.style.display = "none";
  }
});

let alc = document.querySelector(".alc");
let elecs = document.querySelector(".elecs");
let jewel = document.querySelector(".jewel");
let man = document.querySelector(".man");
let woman = document.querySelector(".woman");
const array = [alc, elecs, jewel, man, woman];
// console.log(array);
array.forEach((e) => {
  e.addEventListener("click", function (bumble) {
    if (e.textContent == "all") {
      clothes();
    } else {
      fetch(`https://fakestoreapi.com/products/category/${e.textContent}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          clothesData = data;
          displayClothes(data);
        });
    }
  });
});
