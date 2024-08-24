// Slideshow for the left container
let slideIndexLeft = 0;
const slidesLeft = document.querySelectorAll('.slide-left');
const slideIntervalLeft = 3000; // 3 seconds

function showSlidesLeft() {
    slidesLeft.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndexLeft++;
    if (slideIndexLeft > slidesLeft.length) { slideIndexLeft = 1; }
    slidesLeft[slideIndexLeft - 1].style.display = 'block';
    setTimeout(showSlidesLeft, slideIntervalLeft);
}

// Slideshow for the right container
let slideIndexRight = 0;
const slidesRight = document.querySelectorAll('.slide-right');
const slideIntervalRight = 3000; // 3 seconds

function showSlidesRight() {
    slidesRight.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndexRight++;
    if (slideIndexRight > slidesRight.length) { slideIndexRight = 1; }
    slidesRight[slideIndexRight - 1].style.display = 'block';
    setTimeout(showSlidesRight, slideIntervalRight);
}

showSlidesLeft();
showSlidesRight();
const centerBox = document.getElementById('center-box');
const leftBox = document.getElementById('left-box');
const rightBox = document.getElementById('right-box');

let expanded = false;

centerBox.addEventListener('click', () => {
    if (!expanded) {
        // Move boxes outwards with spacing
        leftBox.style.transform = 'translate(-250%, -50%) scale(1)';
        rightBox.style.transform = 'translate(150%, -50%) scale(1)';
    } else {
        // Return boxes to the center
        leftBox.style.transform = 'translate(-50%, -50%) scale(0)';
        rightBox.style.transform = 'translate(-50%, -50%) scale(0)';
    }
    expanded = !expanded;
});

