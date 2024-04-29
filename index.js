


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-menu");
    const menuContainer = document.querySelector(".nutribump_ul_container");

    const searchBar = document.querySelector(".nutribump_profile_search");
    const searchIcon = document.querySelector("#searchIconmobile");
    var navLinks = document.querySelectorAll('.nutribump_menu li a');

    hamburger.addEventListener("click", function () {
        menuContainer.classList.toggle("show");
        searchBar.classList.toggle("hide");
    });

    var activeLink = document.querySelector('.nutribump_menu li a.active');
    var lpage = activeLink.getAttribute('data-page');


    searchIcon.addEventListener("click", function (e) {

        document.getElementById("overlay").style.display = "block";
        document.getElementById("searchPopup").style.display = "block";
    });

    var currentPage = localStorage.getItem('activePage');

    if (lpage === "home") {
        console.log('remove')
        document.querySelector(`.nutribump_menu li a[data-page="home"]`).classList.remove('active');
    }



    if (currentPage) {

        document.querySelector(`.nutribump_menu li a[data-page="${currentPage}"]`).classList.add('active');
    }

    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });

            this.classList.add('active');

            var page = this.getAttribute('data-page');
            localStorage.setItem('activePage', page);
        });
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

