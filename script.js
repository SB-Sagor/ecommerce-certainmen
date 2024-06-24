document.addEventListener("DOMContentLoaded", () => {
  let proContainers = document.querySelectorAll(".pro-container");
  //redirication of one page to another page
  proContainers.forEach((proContainer) => {
    proContainer.addEventListener("click", (event) => {
      if (event.target.closest(".pro")) {
        const currentPage = proContainer.dataset.page;
        if (currentPage === "index") {
          window.location.href = "shop.html";
        } else if (currentPage === "index1") {
          window.location.href = "shop.html";
        } else if (currentPage === "shop") {
          window.location.href = "sproduct.html";
        } else if (currentPage === "sproduct") {
          window.location.href = "shop.html";
        }
      }
    });
  });
  //replace the big image with small image in sproduct.html page
  let MainImg = document.querySelector("#MainImg");
  let smallimg = document.querySelectorAll(".small-img");
  smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
  };
  smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
  };
  smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
  };
  smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
  };
  
 
});
// to respond shop now button in index.html page .
let btn = document.querySelector("#btn");
btn.onclick = () => {
  window.location.href = "shop.html";
};
//when i click in page 1 the it will redirect the 2nd page and then next and and and

document.addEventListener("DOMContentLoaded", () => {
  let page1 = document.querySelector("#page1");
  let page2 = document.querySelector("#page2");
  let page3 = document.querySelector("#page3");
  let next = document.querySelector("#next");

  if (page1) {
    page1.onclick = () => {
      window.location.href = "shop1.html";
    };
  }

  if (page2) {
    page2.onclick = () => {
      window.location.href = "shop2.html";
    };
  }

  if (page3) {
    page3.onclick = () => {
      window.location.href = "shop3.html";
    };
  }

  if (next) {
    next.onclick = () => {
      // You can implement next page logic here
      // For now, we'll assume it goes to shop2.html for demonstration
      window.location.href = "shop2.html";
    };
  }
});

// var MainImg = document.getElementById("MainImg");
// var smallimg = document.getElementsByClassName("small-img");
