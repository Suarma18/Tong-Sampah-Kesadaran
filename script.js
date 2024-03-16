$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop: true,
    // autoplay:true, // Enable autoplay
    // autoplayTimeout:5000, // Set autoplay interval in milliseconds (e.g., 3000ms = 3 seconds)
    margin: 0,
    items: 1,
    lazyLoad: true,
    nav: true,
    navText: ['<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.5 0C20.2065 0 13.2118 2.89731 8.05456 8.05456C2.89731 13.2118 0 20.2065 0 27.5C0 34.7935 2.89731 41.7882 8.05456 46.9454C13.2118 52.1027 20.2065 55 27.5 55C34.7935 55 41.7882 52.1027 46.9454 46.9454C52.1027 41.7882 55 34.7935 55 27.5C55 20.2065 52.1027 13.2118 46.9454 8.05456C41.7882 2.89731 34.7935 0 27.5 0ZM39.5312 25.7812C39.9871 25.7812 40.4243 25.9623 40.7466 26.2847C41.0689 26.607 41.25 27.0442 41.25 27.5C41.25 27.9558 41.0689 28.393 40.7466 28.7153C40.4243 29.0377 39.9871 29.2188 39.5312 29.2188H19.6178L26.9981 36.5956C27.1579 36.7554 27.2847 36.9451 27.3712 37.1539C27.4577 37.3627 27.5022 37.5865 27.5022 37.8125C27.5022 38.0385 27.4577 38.2623 27.3712 38.4711C27.2847 38.6799 27.1579 38.8696 26.9981 39.0294C26.8383 39.1892 26.6486 39.3159 26.4398 39.4024C26.231 39.4889 26.0072 39.5334 25.7812 39.5334C25.5553 39.5334 25.3315 39.4889 25.1227 39.4024C24.9139 39.3159 24.7242 39.1892 24.5644 39.0294L14.2519 28.7169C14.0918 28.5572 13.9648 28.3675 13.8782 28.1587C13.7915 27.9499 13.7469 27.7261 13.7469 27.5C13.7469 27.2739 13.7915 27.0501 13.8782 26.8413C13.9648 26.6324 14.0918 26.4428 14.2519 26.2831L24.5644 15.9706C24.8871 15.6479 25.3248 15.4666 25.7812 15.4666C26.2377 15.4666 26.6754 15.6479 26.9981 15.9706C27.3209 16.2934 27.5022 16.7311 27.5022 17.1875C27.5022 17.6439 27.3209 18.0816 26.9981 18.4044L19.6178 25.7812H39.5312Z" fill="#18C965" fill-opacity="0.18"/></svg>',

    '<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.5 0C34.7935 0 41.7882 2.89731 46.9454 8.05456C52.1027 13.2118 55 20.2065 55 27.5C55 34.7935 52.1027 41.7882 46.9454 46.9454C41.7882 52.1027 34.7935 55 27.5 55C20.2065 55 13.2118 52.1027 8.05456 46.9454C2.89731 41.7882 0 34.7935 0 27.5C0 20.2065 2.89731 13.2118 8.05456 8.05456C13.2118 2.89731 20.2065 0 27.5 0ZM15.4688 25.7812C15.0129 25.7812 14.5757 25.9623 14.2534 26.2847C13.9311 26.607 13.75 27.0442 13.75 27.5C13.75 27.9558 13.9311 28.393 14.2534 28.7153C14.5757 29.0377 15.0129 29.2188 15.4688 29.2188H35.3822L28.0019 36.5956C27.8421 36.7554 27.7153 36.9451 27.6288 37.1539C27.5423 37.3627 27.4978 37.5865 27.4978 37.8125C27.4978 38.0385 27.5423 38.2623 27.6288 38.4711C27.7153 38.6799 27.8421 38.8696 28.0019 39.0294C28.1617 39.1892 28.3514 39.3159 28.5602 39.4024C28.769 39.4889 28.9928 39.5334 29.2188 39.5334C29.4447 39.5334 29.6685 39.4889 29.8773 39.4024C30.0861 39.3159 30.2758 39.1892 30.4356 39.0294L40.7481 28.7169C40.9082 28.5572 41.0352 28.3675 41.1218 28.1587C41.2085 27.9499 41.2531 27.7261 41.2531 27.5C41.2531 27.2739 41.2085 27.0501 41.1218 26.8413C41.0352 26.6324 40.9082 26.4428 40.7481 26.2831L30.4356 15.9706C30.1129 15.6479 29.6752 15.4666 29.2188 15.4666C28.7623 15.4666 28.3246 15.6479 28.0019 15.9706C27.6791 16.2934 27.4978 16.7311 27.4978 17.1875C27.4978 17.6439 27.6791 18.0816 28.0019 18.4044L35.3822 25.7812H15.4688Z" fill="#18C965" fill-opacity="0.43"/></svg>'],
    // animateOut: 'rollOut', // Type of transition for slide change
    // animateIn: 'rollIn', // Type of transition for slide initialization
    smartSpeed: 1000, // Speed of the transition
    responsiveClass: true,
    responsive: {
        0: {
            loop: false,
            stagePadding: 0,
        },
        767: {
            loop: false,
            stagePadding: 0,
        },
        1025: {
            loop: true,
            stagePadding: 200,
        }
    }
})

document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan semua tautan dalam navbar
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Mengecek ID setiap bagian saat halaman dimuat atau di-scroll
    function checkSection() {
        // Mendapatkan semua bagian (section)
        var sections = document.querySelectorAll("section");
    
        // Iterasi melalui setiap bagian
        sections.forEach(function(section) {
            // Mendapatkan ID dari bagian
            var sectionID = section.getAttribute("id");
    
            // Mengecek apakah bagian dalam viewport
            if (isInViewport(section)) {
                // Menghapus kelas active dari semua tautan
                navLinks.forEach(function(link) {
                    link.classList.remove("active");
                });
    
                // Menambahkan kelas active ke tautan yang sesuai dengan ID bagian
                var correspondingLink = document.querySelector('.navbar-nav .nav-link[href="#' + sectionID + '"]');
                if (correspondingLink) {
                    correspondingLink.classList.add("active");
                }
            }
        });
    }
    

    // Memanggil fungsi checkSection saat halaman dimuat atau di-scroll
    window.addEventListener("scroll", checkSection);

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    

    // Iterasi melalui setiap tautan
    navLinks.forEach(function(link) {
        // Menambahkan event listener untuk setiap tautan
        link.addEventListener("click", function(event) {
            // Menghentikan default behavior dari tautan
            event.preventDefault();

            // Menghapus kelas active dari semua tautan
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            // Menambahkan kelas active ke tautan yang diklik
            this.classList.add("active");

            // Mendapatkan ID dari bagian yang sesuai dengan tautan yang diklik
            var targetID = this.getAttribute("href");

            // Mendapatkan posisi Y dari bagian yang dituju
            var targetY = document.querySelector(targetID).offsetTop;

            // Melakukan scroll ke bagian yang dituju
            window.scrollTo({
                top: targetY,
                behavior: "smooth"
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan tombol "Lihat Lebih"
    var btnLihatLebih = document.querySelector(".btn-beranda");

    // Menambahkan event listener untuk tombol "Lihat Lebih"
    btnLihatLebih.addEventListener("click", function() {
        // Mendapatkan ID dari bagian yang ingin dituju
        var targetID = "#profile"; // Ganti dengan ID yang diinginkan

        // Mendapatkan posisi Y dari bagian yang dituju
        var targetElement = document.querySelector(targetID);
        var targetY = targetElement.offsetTop;

        // Melakukan scroll ke bagian yang dituju
        window.scrollTo({
            top: targetY,
            behavior: "smooth"
        });
    });
});