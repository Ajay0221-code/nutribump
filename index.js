


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-menu");
    const menuContainer = document.querySelector(".nutribump_ul_container");

    const searchBar = document.querySelector(".nutribump_profile_search");
    const searchIcon = document.querySelector("#searchIconmobile");
    const menuItems = document.querySelectorAll(".nav-link a");

    hamburger.addEventListener("click", function () {
        menuContainer.classList.toggle("show");
        searchBar.classList.toggle("hide");
    });


    searchIcon.addEventListener("click", function (e) {
        console.log(e)
        document.getElementById("overlay").style.display = "block";
        document.getElementById("searchPopup").style.display = "block";
    });

     
});


// search icon
document.getElementById("searchIcon").addEventListener("click", function (e) {
    console.log(e)
    document.getElementById("overlay").style.display = "block";
    document.getElementById("searchPopup").style.display = "block";
});

function closeSearchPopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("searchPopup").style.display = "none";
}


//handle bg images

document.addEventListener("DOMContentLoaded", function () {

    const bgImageArray = ["./utils/topbanner.png", "./utils/topbanner-2.png"]

    let currentIndex = 0;

    const changeBgImage = () => {
        const mainDiv = document.querySelector(".main-container")

        mainDiv.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImageArray[currentIndex]})`
        currentIndex = (currentIndex + 1) % bgImageArray.length;
    }

    //initial call
    changeBgImage()

    //initate call on timer
    setInterval(changeBgImage, 5000);
})


//slide show

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }














document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', function () {
        slider.scrollBy({
            left: -350, // Adjust this value to control how much the slider scrolls
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', function () {
        slider.scrollBy({
            left: 350, // Adjust this value to control how much the slider scrolls
            behavior: 'smooth'
        });
    });
});

