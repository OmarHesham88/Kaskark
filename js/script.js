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

let myInterval = setInterval(nextImage, 2000);

function nextImage() {
images.push(images.shift());
updateCarousel();

clearInterval(myInterval);

myInterval = setInterval(nextImage, 2000); 
}
function prevImage() {
  images.unshift(images.pop());
  updateCarousel();

clearInterval(myInterval);

myInterval = setInterval(nextImage, 2000);
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
const menuNavContainer = document.querySelector('.menu-nav-container'); // The scrollable container
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
                const containerRect = menuNavContainer.getBoundingClientRect();
                const linkRect = item.getBoundingClientRect();

                if (linkRect.left < containerRect.left || linkRect.right > containerRect.right) {
                    menuNavContainer.scrollTo({
                        left: item.offsetLeft - menuNavContainer.offsetWidth / 2 + item.offsetWidth / 2,
                        behavior: 'smooth'
                    });
                }

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

document.addEventListener('DOMContentLoaded', function () {
  function resetFocus() {
      let focusedElement = document.querySelector('.selectedd');
      if (focusedElement) {
          focusedElement.style.display = 'none';
      }
      document.querySelector('.content').classList.remove('background-blur');
  }

  // Select elements
  const menuBoxes = document.querySelectorAll('.menu-box');
  const selectedBox = document.querySelector('.selectedd');
  const overlay = document.querySelector('.overlay');
  const content = document.querySelector('.content');

  // Array to store product names
  const products = Array.from(menuBoxes).map(box => box.querySelector('h2').innerText);

  // Helper function to handle selection interaction
  function handleSelection(box) {
      content.classList.add('background-blur');
      console.log("i'm working");
      overlay.style.display = 'block';
      const imgSrc = box.querySelector('img').src;
      const price = box.querySelector('.menu-box-details .price').innerText;
      const calories = box.querySelector('.menu-box-details .calories').innerText;
      const title = box.querySelector('h2').innerText;
      const description = box.querySelector('p').innerText;

      selectedBox.querySelector('img').src = imgSrc;

      // Set the text inside the .price and .calories span elements in the selectedBox
      selectedBox.querySelector('.menu-box-details .price').innerHTML = price;
      selectedBox.querySelector('.menu-box-details .calories').innerText = calories;

      selectedBox.querySelector('h2').innerText = title;
      selectedBox.querySelector('p').innerText = description;

      selectedBox.style.display = 'block';
      selectedBox.classList.add('selectedd'); // Ensure the class is added for styling
  }

  // Close the selected box
  document.querySelector('.menu-close-icon').addEventListener('click', () => {
      selectedBox.style.display = 'none';
      content.classList.remove('background-blur');
      overlay.style.display = 'none';
  });

  // Function to filter products for dropdown search
  function filterProducts(inputId, dropdownId) {
      const input = document.getElementById(inputId);
      const dropdown = document.getElementById(dropdownId);
      const filter = input.value.toLowerCase();

      // Clear the dropdown
      dropdown.innerHTML = '';

      // If there's no input, hide the dropdown
      if (!filter) {
          dropdown.style.display = 'none';
          return;
      }

      // Filter the products
      const filteredProducts = products.filter(product => product.toLowerCase().includes(filter));

      // If there are matching products, show them in the dropdown
      if (filteredProducts.length > 0) {
          filteredProducts.forEach(product => {
              const item = document.createElement("div");
              item.className = "dropdown-item";
              item.textContent = product;

              item.onclick = () => {
                  input.value = product; // Set input value to clicked item
                  dropdown.style.display = 'none'; // Hide dropdown

                  // Find the first corresponding menu box and call handleSelection
                  for (let box of menuBoxes) {
                      if (box.querySelector('h2').innerText === product) {
                          console.log(box);
                          handleSelection(box); // Trigger the selection interaction
                          break; // Stop after the first match
                      }
                  }
              };
              dropdown.appendChild(item);
          });

          dropdown.style.display = 'block'; // Show dropdown
      } else {
          dropdown.style.display = 'none'; // Hide dropdown if no matches
      }
  }

  // Add input event listener to the first search input
  const searchInput1 = document.getElementById('product-search');
  const searchButton1 = document.getElementById('search-button');

  if (searchInput1) {
      searchInput1.addEventListener('input', () => filterProducts('product-search', 'dropdown'));
  }
  searchButton1.addEventListener('click', () => {
      filterProducts('product-search', 'dropdown');
  });

  // Add input event listener to the second search input
  const searchInput2 = document.getElementById('product-search2');
  const searchButton2 = document.getElementById('search-button2');

  if (searchInput2) {
      searchInput2.addEventListener('input', () => filterProducts('product-search2', 'dropdown2'));
  }
  searchButton2.addEventListener('click', () => {
      filterProducts('product-search2', 'dropdown2');
  });
});
