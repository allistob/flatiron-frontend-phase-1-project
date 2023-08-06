

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//display mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/*const plantSelect = document.querySelector() {
  //function call

  getFamilies(){
    fetch("https://house-plants.p.rapidapi.com/category/Plants")
    .then(r => r.json())
  }
}


const url = 'https://house-plants.p.rapidapi.com/category/Plants';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '40310442a5msh53ddafca7eb6fa8p1dac00jsn6998af258775',
		'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/
