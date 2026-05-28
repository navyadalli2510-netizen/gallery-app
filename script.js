/* LOGIN */

const loginForm = document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    window.location.href = "gallery.html";

  });

}

/* GALLERY FILTER */

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{

  button.addEventListener("click",()=>{

    document
    .querySelector(".filter-btn.active")
    .classList.remove("active");

    button.classList.add("active");

    const filter = button.dataset.filter;

    galleryItems.forEach(item=>{

      if(filter === "all" || item.classList.contains(filter)){

        item.style.display = "block";

      }else{

        item.style.display = "none";

      }

    });

  });

});

/* LIGHTBOX */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const images = document.querySelectorAll(".gallery-item img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

images.forEach((img,index)=>{

  img.addEventListener("click",()=>{

    currentIndex = index;

    showImage();

    lightbox.classList.add("active");

  });

});

function showImage(){

  lightboxImg.src = images[currentIndex].src;

}

if(nextBtn){

  nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= images.length){
      currentIndex = 0;
    }

    showImage();

  });

}

if(prevBtn){

  prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
      currentIndex = images.length - 1;
    }

    showImage();

  });

}

if(closeBtn){

  closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

  });

}

window.addEventListener("click",(e)=>{

  if(e.target === lightbox){

    lightbox.classList.remove("active");

  }

});

/* LOGOUT */

function logout(){

  window.location.href = "index.html";

}