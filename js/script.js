// Top Button Section
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Dark Mode Section
const toggle = document.getElementById('toggleDark');
const resetBGClr = document.getElementById('toggleDark');

toggle.addEventListener('click', function () {
	this.classList.toggle('fa-moon');
	if (this.classList.toggle('fa-sun')) {
		document.body.classList.toggle('dark-theme');
	} else {
		document.body.classList.toggle('dark-theme');
	}
});
// function ChangeFontSise(type) {
// 	let ids = ['#d'];
// 	ids.forEach((id) => {
// 		let el = document.querySelector(id);
// 		console.log(type);
// 		let fontSize = window.getComputedStyle(el).getPropertyValue('font-size');

// 		fontSize = parseFloat(fontSize);

// 		if (type === 'increase') {
// 			el.style.fontSize = fontSize + 5 + 'px';
// 		} else {
// 			el.style.fontSize = fontSize - 5 + 'px';
// 		}
// 	});
// }
