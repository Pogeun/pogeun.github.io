/* 
    slide show for skill page 
*/

// first slide to show
var index = 1;

// show first slide
for (var i = 1; i <= 2; i++) {
    show(i, index);
}

// show the next or previous slide
function showNext(showNum, slideNum) {
    show(showNum, index += slideNum);
}

// show the current slide
function showCurrent(showNum, slideNum) {
    show(showNum, index = slideNum);
}

// show the slide and hide others
function show(showNum, slideNum) {
    // get slides and dots
    var slides = document.getElementsByClassName("slides show-" + showNum);
    var dots = document.getElementsByClassName("dots show-" + showNum);

    // go to very first slide
    if (slideNum > slides.length) {
        index = 1;
    }

    // go to very last slide
    if (slideNum < 1) {
        index = slides.length;
    }

    // hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // remove colour from all dots
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activated", "");
    }

    // show the slide and colour the dot of the current slide
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " activated";
}