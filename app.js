/*document.addEventListener('DOMContentLoaded', () => {
  const plantFamiliesDropdown = document.querySelector('#plant-families');

  // Function to fetch plant families and populate dropdown
  const populatePlantFamiliesDropdown = () => {
    fetch('https://trefle.io/api/v1/families?token=0Ahx7SHM-ALOCG5yTjHXEJRWGJxmkkl0l-QYkR-B6yM')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((family) => {
          const option = document.createElement('option');
          option.value = family.id;
          option.textContent = family.name;
          plantFamiliesDropdown.appendChild(option);
        });
      })
      .catch((error) => {
        console.error('Error fetching plant families:', error);
      });
  };

  // Populate plant families dropdown initially
  populatePlantFamiliesDropdown();

  // Search functionality
  const searchInput = document.querySelector('#search-input');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    plantFamiliesDropdown.innerHTML = ''; // Clear dropdown content

    if (searchTerm.trim() === '') {
      populatePlantFamiliesDropdown(); // Populate with all plant families
    } else {
      fetch(`https://trefle.io/api/v1/families/search?token=YOUR_API_TOKEN&name=${encodeURIComponent(searchTerm)}`)
        .then((response) => response.json())
        .then((data) => {
          data.forEach((family) => {
            const option = document.createElement('option');
            option.value = family.id;
            option.textContent = family.name;
            plantFamiliesDropdown.appendChild(option);
          });
        })
        .catch((error) => {
          console.error('Error searching plant families:', error);
        });
    }
  });*/

  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');

  // Display mobile menu
  const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };


  menu.addEventListener('click', mobileMenu);

  
  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
