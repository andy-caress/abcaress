function menuShow() {
  var element = document.getElementById("box");
  element.classList.toggle("style");
}

/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
*/
$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 7000,
	//gap in pixels between the tickers
	gap: 5,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  pauseOnHover: true
});

$('.marquee-btn').marquee({
	duration: 2500,
	gap: 10,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
  pauseOnHover: true
});

$('.marquee-btn2').marquee({
	duration: 2500,
	gap: 10,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
  pauseOnHover: true
});

// HOVER STATE //////////////////

var tooltips = document.querySelectorAll('.toolspan span');

window.onmousemove = function (e) {
    var x = (e.clientX) + 'px',
        y = (e.clientY) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};
