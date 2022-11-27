
const menu = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const li = document.querySelectorAll(".li");
const item_img = document.querySelectorAll(".item");
const navC = document.querySelector("nav");

// FOR NAB BAR COLOR ON SCROOL
let off = 10;
window.addEventListener("scroll", ()=>{
  if(window.pageYOffset > off){
    navC.classList.add("nav-c")
  } else {
    navC.classList.remove("nav-c")
  }
})

// FOR ICONE NAV BAR TOOGEL
menu.onclick = () =>{
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
}

li.forEach((link)=>{
    link.onclick = () => {
        navbar.classList.toggle("open-menu");
        menu.classList.toggle("move");
    }
})


// GALLERY

const label = document.querySelector(".label-gallery");

window.onload = ()=>{
    
    label.onclick = (se)=>{
        if(se.target.classList.contains("label")) {

            label.querySelector(".active").classList.remove("active");
            se.target.classList.add("active");

            let item_images = se.target.getAttribute("data-name");
            item_img.forEach((img)=>{
                let filter = img.getAttribute("data-name");

                if(filter == item_images || item_images == "all") {
                    img.classList.remove("hide")
                    img.classList.add("show")
                } else {
                    img.classList.add("hide")
                    img.classList.remove("show")
                }
            })
        }
    }
}

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
    breakpoints: {
        400: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
      },
  });
