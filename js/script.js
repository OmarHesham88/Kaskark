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

  // main page images load at the same time & smoothly
  const headerImages = document.querySelectorAll('.image-grid img'); // Selecting images in the image-grid class
  let loadedImagesCount = 0;
  
  headerImages.forEach(img => {
      const imgClone = new Image();
      imgClone.src = img.src; 
      imgClone.onload = () => {
          loadedImagesCount++;
          if (loadedImagesCount === headerImages.length) {
              headerImages.forEach(image => image.classList.add('loaded'));
          }
      };
  });
  



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

  // prevent zooming on Iphone
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function (e) {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
      e.preventDefault();
  }
  lastTouchEnd = now;
}, { passive: false });




  // search icon in menu page

  document.getElementById("search-icon").addEventListener("click", function() {
    var searchBox = document.getElementById("menu-search-box");
    if (searchBox.style.display === "none" || searchBox.style.display === "") {
      searchBox.style.display = "flex";
    } else {
      searchBox.style.display = "none";
    }
  });
  



// scrolling functionality in menu-page

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 

        // Removing the 'active' class from all nav links
        document.querySelectorAll('.nav-link').forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');

        const targetId = this.getAttribute('href').substring(1); // Get the id without the '#'
        const targetElement = document.getElementById(targetId); // Find the target element
        
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Get element's position
            const offset = 80; 
            
            window.scrollTo({
                top: targetPosition - offset, // Scroll to the target position minus the offset
                behavior: 'smooth'
            })
        }
    });
});









// 

// Listen for clicks on the pagination container
// document.querySelector('.page-numbers').addEventListener('click', function(event) {
//   if(event.target.classList.contains('page-number')) {
//       document.querySelectorAll('.page-number').forEach(button => {
//           button.classList.remove('selected');
//       });

//       event.target.classList.add('selected');
//   }
// });




// Menu-Page => scrolling functionality

const navItems = document.querySelectorAll('.nav-link');
const productCategories = document.querySelectorAll('.menu-category-container'); 
let previousCategory = '';

window.addEventListener('scroll', () => {
    let current = '';

    productCategories.forEach(category => {
        const { top, bottom } = category.getBoundingClientRect();
        const categoryId = category.querySelector('h2').getAttribute('id');

        if (top <= window.innerHeight / 3 && bottom >= 0) {
            current = categoryId; 
        }
    });


    if (current !== previousCategory) {
        navItems.forEach(item => {
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        previousCategory = current;
    }
});








// Menu-page => To apply the blur effect when I search on a product
// function focusElement(element) {
//   element.classList.remove('hidden');
//   element.classList.add('selectedd');
//   element.style.display = 'block'; 
  
//   document.querySelector('.content').classList.add('background-blur');
//   document.querySelector('.overlay').style.display = 'block';
// }

function resetFocus() {
  let focusedElement = document.querySelector('.selectedd');
  if (focusedElement) {
    focusedElement.style.display = 'none';
          
  }
}
  document.querySelector('.content').classList.remove('background-blur');

//   if (!document.querySelector('.selectedd')) {
//       document.querySelector('.overlay').style.display = 'none';
//   }
// }







const menuBoxes = document.querySelectorAll('.menu-box');
const selectedBox = document.querySelector('.selectedd');
const overlay = document.querySelector('.overlay');
const content = document.querySelector('.content');

menuBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
        // Prevent this click from triggering the "outside" click handler
        e.stopPropagation();

        content.classList.add('background-blur');
        overlay.style.display = 'block'; 

        const imgSrc = box.querySelector('img').src;
        const price = box.querySelector('.menu-box-details .price').innerText;
        const calories = box.querySelector('.menu-box-details .calories').innerText;
        const title = box.querySelector('h2').innerText;
        const description = box.querySelector('p').innerText;

        selectedBox.querySelector('img').src = imgSrc;

        // Set the text next to .fa-tag and .fa-fire for price and calories
        selectedBox.querySelector('.menu-box-details .price').innerHTML = price;
        selectedBox.querySelector('.menu-box-details .calories').innerText = calories;

        selectedBox.querySelector('h2').innerText = title;
        selectedBox.querySelector('p').innerText = description;

        selectedBox.style.display = 'block';
        selectedBox.classList.add('selectedd'); // Ensure the class is added for styling
    });
});

// Hide selectedBox and remove blur when clicking outside of selectedBox
document.addEventListener('click', (e) => {
    // Check if the click was outside the selectedBox
    if (!selectedBox.contains(e.target)) {
        selectedBox.style.display = 'none';
        selectedBox.classList.remove('selectedd');
        content.classList.remove('background-blur');
        overlay.style.display = 'none';
    }
});
