function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
  }
  document.addEventListener('click',function(event){
    var sidebar = document.querySelector('.sidebar');
    var menutoggle = document.querySelector(".menu-toggle");

    if(!sidebar.contains(event.target) && !menutoggle.contains(event.target)){
      if(sidebar.classList.contains('active')){
      sidebar.classList.toggle('active');
      }
    }
  })
  // Back to top button functionality
  // const backToTopBtn = document.getElementById('backToTopBtn');

  // // Show the button when scrolling down
  // window.addEventListener('scroll', () => {
  //     if (window.scrollY > 300) {
  //         backToTopBtn.classList.add('show');
  //     } else {
  //         backToTopBtn.classList.remove('show');
  //     }
  // });

  // // Smooth scroll to the top
  // backToTopBtn.addEventListener('click', () => {
  //     window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth'
  //     });
  // });

  // functionality of Carousel
  let images = ["layer-1", "layer-2-left", "layer-3-left", "layer-4-right", "layer-3-right", "layer-2-right"];

function updateCarousel() {
const carouselImages = document.querySelectorAll('.carousel img');
if (carouselImages.length > images.length) {
  const additionalImagesNeeded = carouselImages.length - images.length;
  for (let i = 0; i < additionalImagesNeeded; i++) {
      images.splice(3, 0, "hidden");
  }
}

for (let i = 0; i < carouselImages.length; i++) {
  carouselImages[i].className = images[i];
}
}

let myInterval = setInterval(nextImage, 2000); // Declare the interval outside

function nextImage() {
images.push(images.shift());
updateCarousel();

clearInterval(myInterval);

myInterval = setInterval(nextImage, 2000); // Reset the interval to start counting from 0
}
function prevImage() {
  images.unshift(images.pop());
  updateCarousel();

clearInterval(myInterval);

myInterval = setInterval(nextImage, 2000); // Reset the interval to start counting from 0

}

