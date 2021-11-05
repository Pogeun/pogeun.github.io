// slide show
var index = 1;

// show first slide
show(index);

function showNext(n) {
    show(index += n);
}

function showCurrent(n) {
    show(index = n);
}

function show(n) {
    // get slides and dots
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dots");

    // go to very first slide
    if (n > slides.length) {
        index = 1;
    }

    // go to very last slide
    if (n < 1) {
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