var map = null;
var navigationControl = null;

// $(document).ready(function(){
// 	$(window).scroll(function () {
// 			if ($(this).scrollTop() > 50) {
// 				$('#back-to-top').fadeIn();
// 			} else {
// 				$('#back-to-top').fadeOut();
// 			}
// 		});
// 		// scroll body to 0px on click
// 		$('#back-to-top').click(function () {
// 			$('body,html').animate({
// 				scrollTop: 0
// 			}, 400);
// 			return false;
// 		});
// });

window.onload = function () {
    L.mapquest.key = 'A6qhm4C7QXGtRyV7Q0llfTDEG8LwWdVy';

    map = L.mapquest.map('map', {
        center: [25.5922273, 68.4424681],
        layers: L.mapquest.tileLayer('map'),
        zoom: 8
    });

    // Keep a reference to the navigationControl
    navigationControl = L.mapquest.navigationControl();
    map.addControl(navigationControl);
    console.log(navigationControl);
    // L.marker([39.7392, -104.9903], {
    //     icon: L.mapquest.icons.marker(),
    //     draggable: false
    // }).bindPopup('Matiari').addTo(map);
    //dewuife hfeu wfu
}

function clickLocation(lat, lng) {
    // console.log("hello")
    var customIcon = L.mapquest.icons.circle({
        primaryColor: '#ff0000'
    });
    L.marker([lat, lng], { icon: customIcon }).addTo(map);

}

function backToTop(){
    window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
}

