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

// hide main page products exceeding 5

const mainProducts = document.querySelectorAll(".main-page .products-item");
for(let i = 5; i < mainProducts.length; i++){
    mainProducts[i].style.display = "none";
}


// Products Pagination 

document.addEventListener('DOMContentLoaded', function() {
    const unitsPerPage = 10;
    const units = document.querySelectorAll('.our-products-page .products-item');
    const totalUnits = units.length;
    const totalPages = Math.ceil(totalUnits / unitsPerPage);
    const paginationContainer = document.querySelector('.inner-pages-container');
    let currentPage = 1;

    // show the nth set of 12 buildings based on the page number
    function showUnit(page) {
        currentPage = page;

        // Hide all buildings
        units.forEach(unit => {
            unit.style.display = 'none';
        });

        const start = (page - 1) * unitsPerPage;
        const end = start + unitsPerPage;

        for (let i = start; i < end && i < totalUnits; i++) {
            units[i].style.display = 'flex'; 
        }

        updatePaginationButtons();
    }

    function createPaginationButtons() {
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.classList.add('pagination-btn');
            if (i === 1) btn.classList.add('active-page'); 
            btn.dataset.page = i;

            btn.addEventListener('click', function() {
                showUnit(parseInt(this.dataset.page, 10));
            });

            paginationContainer.appendChild(btn);
        }
    }


    const prevButton = document.querySelector('.pagination-btn.prev');
    const nextButton = document.querySelector('.pagination-btn.next');
    nextButton.addEventListener('click', function () {
        if (currentPage < totalPages) {
            showUnit(currentPage + 1);
        }
    });
    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
            showUnit(currentPage - 1);
        }
    });
            

    function updatePaginationButtons() {
        const buttons = document.querySelectorAll('.pagination-btn');
        buttons.forEach(button => {
            const page = parseInt(button.dataset.page, 10);
            if (page === currentPage) {
                button.classList.add('active-page');
            } else {
                button.classList.remove('active-page');
            }
        });
    }

    // Initial setup
    createPaginationButtons();
    showUnit(1);  
});

// branches Pagination

document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 6; 
    const branches = document.querySelectorAll('.branch-box'); 
    const totalBranches = branches.length; 
    const totalPages = Math.ceil(totalBranches / itemsPerPage);
    const paginationContainer = document.querySelector('.inner-pages-container');
    let currentPage = 1;

    function showBranches(page) { 
        currentPage = page;

        branches.forEach(branch => {
            branch.style.display = 'none';
        });

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        for (let i = start; i < end && i < totalBranches; i++) { 
            branches[i].style.display = 'flex'; 
        }

        updatePaginationButtons();
    }

    function createPaginationButtons() {
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.classList.add('pagination-btn');
            if (i === 1) btn.classList.add('active-page'); 
            btn.dataset.page = i;

            btn.addEventListener('click', function() {
                showBranches(parseInt(this.dataset.page, 10));
            });

            paginationContainer.appendChild(btn);
        }
    }

    const prevButton = document.querySelector('.pagination-btn.prev');
    const nextButton = document.querySelector('.pagination-btn.next');
    nextButton.addEventListener('click', function () {
        if (currentPage < totalPages) {
            showBranches(currentPage + 1);
        }
    });
    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
            showBranches(currentPage - 1); 
        }
    });

    function updatePaginationButtons() {
        const buttons = document.querySelectorAll('.pagination-btn');
        buttons.forEach(button => {
            const page = parseInt(button.dataset.page, 10);
            if (page === currentPage) {
                button.classList.add('active-page');
            } else {
                button.classList.remove('active-page');
            }
        });
    }

    createPaginationButtons();
    showBranches(1); // Updated function call
});














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


const dropdown1 = document.getElementById("dropdown");
const dropdown2 = document.getElementById("dropdown2");



document.addEventListener('DOMContentLoaded', function () {
  function resetFocus() {
      let focusedElement = document.querySelector('.selectedd');
      if (focusedElement) {
          focusedElement.style.display = 'none';
      }
      document.querySelector('.content').classList.remove('background-blur');
  }

  const menuBoxes = document.querySelectorAll('.menu-box');
  const selectedBox = document.querySelector('.selectedd');
  const overlay = document.querySelector('.overlay');
  const content = document.querySelector('.content');

  const products = Array.from(menuBoxes).map(box => box.querySelector('h2').innerText);

  function handleSelection(box) {
      content.classList.add('background-blur');
      overlay.style.display = 'block';
      const imgSrc = box.querySelector('img').src;
      const price = box.querySelector('.menu-box-details .price').innerText;
      const calories = box.querySelector('.menu-box-details .calories').innerText;
      const title = box.querySelector('h2').innerText;
      const description = box.querySelector('p').innerText;

      selectedBox.querySelector('img').src = imgSrc;

      selectedBox.querySelector('.menu-box-details .price').innerHTML = price;
      selectedBox.querySelector('.menu-box-details .calories').innerText = calories;

      selectedBox.querySelector('h2').innerText = title;
      selectedBox.querySelector('p').innerText = description;

      selectedBox.style.display = 'block';
      selectedBox.classList.add('selectedd');
      
    }
    
    document.addEventListener('click', (event) => {
      if (!selectedBox.contains(event.target) && !dropdown1.contains(event.target) && !dropdown2.contains(event.target)) {
          selectedBox.style.display = 'none';
          content.classList.remove('background-blur');
          overlay.style.display = 'none';
      }
  });
    
    
    document.querySelector('.menu-close-icon').addEventListener('click', () => {
      selectedBox.style.display = 'none';
      content.classList.remove('background-blur');
      overlay.style.display = 'none';
    });

  function filterProducts(inputId, dropdownId) {
      const input = document.getElementById(inputId);
      const dropdown = document.getElementById(dropdownId);
      const filter = input.value.toLowerCase();

      dropdown.innerHTML = '';

      if (!filter) {
          dropdown.style.display = 'none';
          return;
      }
      
      const filteredProducts = products.filter(product => product.toLowerCase().includes(filter));

      if (filteredProducts.length > 0) {
          filteredProducts.forEach(product => {
              const item = document.createElement("div");
              item.className = "dropdown-item";
              item.textContent = product;

              item.onclick = () => {
                  input.value = product;
                  dropdown.style.display = 'none';
                  
                  for (let box of menuBoxes) {
                      if (box.querySelector('h2').innerText === product) {
                          console.log(box);
                          handleSelection(box); 
                          break;
                      }
                  }
              };
              dropdown.appendChild(item);
          });
          
          dropdown.style.display = 'block'; 
      } else {
          dropdown.style.display = 'none';
        }
  }

  const searchInput1 = document.getElementById('product-search');
  const searchButton1 = document.getElementById('search-button');
  
  if (searchInput1) {
      searchInput1.addEventListener('input', () => filterProducts('product-search', 'dropdown'));
  }
  searchButton1.addEventListener('click', () => {
      filterProducts('product-search', 'dropdown');
    });

    const searchInput2 = document.getElementById('product-search2');
    const searchButton2 = document.getElementById('search-button2');
    
  if (searchInput2) {
      searchInput2.addEventListener('input', () => filterProducts('product-search2', 'dropdown2'));
    }
    searchButton2.addEventListener('click', () => {
      filterProducts('product-search2', 'dropdown2');
  });
  
  
  const dropdown1 = document.getElementById("dropdown");
const input1 = document.getElementById("product-search");

document.addEventListener('click', function(event) {
    if (!dropdown1.contains(event.target) && !input1.contains(event.target)) {
        dropdown1.style.display = 'none';
    }
});



const dropdown2 = document.getElementById("dropdown2");
const input2 = document.getElementById("product-search2");

document.addEventListener('click', function(event) {
    if (!dropdown2.contains(event.target) && !input2.contains(event.target)) {
        dropdown2.style.display = 'none';
    }
});




input1.addEventListener('focus', () => {
    dropdown1.innerHTML = ''; 
    const menuBoxes = document.querySelectorAll('.menu-box');
    const products = Array.from(menuBoxes).map(box => box.querySelector('h2').innerText);
    products.forEach(product => {
        const item = document.createElement("div");
        item.className = "dropdown-item";
        item.textContent = product;

        item.onclick = () => {
            input1.value = product;
            dropdown.style.display = 'none';
            
            for (let box of menuBoxes) {
                if (box.querySelector('h2').innerText === product) {
                    console.log(box);
                    handleSelection(box); 
                    break;
                }
            }
        };
        dropdown1.appendChild(item);
    });

    dropdown1.style.display = 'block'; 
});
input2.addEventListener('focus', () => {
    const menuBoxes = document.querySelectorAll('.menu-box');
    const products = Array.from(menuBoxes).map(box => box.querySelector('h2').innerText);
    products.forEach(product => {
        const item = document.createElement("div");
        item.className = "dropdown-item";
        item.textContent = product;

        item.onclick = () => {
            dropdown.style.display = 'none';
            
            for (let box of menuBoxes) {
                if (box.querySelector('h2').innerText === product) {
                    console.log(box);
                    handleSelection(box); 
                    break;
                }
            }
        };
        dropdown2.appendChild(item);
    });

    dropdown2.style.display = 'block'; 
});
});

