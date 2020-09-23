function changeImage(value) {
    console.log(value)
    document.getElementById("main-img").src = `./img/websites/${value}`;

    document.getElementById("large-img").style.background = `url("./img/websites/${value}") no-repeat rgba(32,
    31, 36, 1)`;
    document.getElementById("main-img-enlarge").href = `./images.html?location=index&image=${value}`;

}

zoomFunction = (zoom, positionX, positionY, mainImg, largeImg, offsetLeft, offsetTop) => {

    var original = document.getElementById(mainImg),
        magnified = document.getElementById(largeImg),
        style = magnified.style,
        x = positionX - offsetLeft - 75,
        y = positionY - offsetTop,
        imgWidth = original.width,
        imgHeight = original.height,
        xperc = (x / imgWidth) * 100,
        yperc = (y / imgHeight) * 100;

    // Add some margin for right edge
    if (x > 0.01 * imgWidth) {
        xperc += 0.15 * xperc;
    }

    // Add some margin for bottom edge
    if (y >= 0.01 * imgHeight) {
        yperc += 0.15 * yperc;
    }
    
    // Set the background of the magnified image horizontal
    style.backgroundPositionX = xperc - 9 + "%";
    // Set the background of the magnified image vertical
    style.backgroundPositionY = yperc - 9 + "%";

    // Move the magnifying glass with the mouse movement.
    style.left = x - 50 + "px";
    style.top = y - 50 + "px";
}

document.getElementById("zoom").addEventListener(
    "mousemove",
    function (e) {
        // let [mainImg, largeImg] = ["main-img", "large-img"];
        zoomFunction("zoom", e.pageX, e.pageY, "main-img", "large-img", this.offsetLeft, this.offsetTop)
    },
    false
);

document.getElementById("zoom-2").addEventListener(
    "mousemove",
    function (e) {
        // let [mainImg, largeImg] = ["main-img", "large-img"];
        zoomFunction("zoom-2", e.pageX, e.pageY, "main-img-2", "large-img-2", this.offsetLeft, this.offsetTop)
    },
    false
);