var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("key");

// document.getElementById("web-img").src = `./img/websites/${webObjectLiteral[c].images[0]}`;
// document.getElementById("web-img-link").href = ``;
var imgSectionDiv = document.getElementById("img-section");
var div = document.createElement('div');

const regularCount = parseInt(c) + 1;

console.log(regularCount)
div.id = `zoom-${regularCount}`;
div.className = `magnify-wrapper row`;
var a = document.createElement('a');
a.id = `main-img-enlarge-${regularCount}`;
a.href = `./images.html?location=web&image=${webObjectLiteral[c].images[0]}.png&index=${c}`;

var img = document.createElement('img');

img.className = 'img-div column';
img.src = `./img/websites/${webObjectLiteral[c].images[0]}.png`;
img.id = `main-img-${regularCount}`

a.appendChild(img);
div.appendChild(a);


var largeDiv = document.createElement('div');
largeDiv.className = `column column-2`;
largeDiv.style = 'position: relative;';

var largeImg = document.createElement('img');
largeImg.id = `large-img-${regularCount}`;

largeDiv.appendChild(largeImg);
div.appendChild(largeDiv);

var thumbnailsDiv = document.createElement('div');
thumbnailsDiv.style = "padding: 0 10%";

for (var i = 0; i < webObjectLiteral[c].images.length; i++) {
    var thumbnailImg = document.createElement('img');

    thumbnailImg.src = `./img/websites/${webObjectLiteral[c].images[i]}.png`;
    thumbnailImg.style = "height: 50px; width: auto; padding: 5px 5px 0 0;cursor: pointer;";
    const imgValue = webObjectLiteral[c].images[i];
    thumbnailImg.addEventListener('click', function () {
        console.log(imgValue)
        changeImage(`${imgValue}.png`, regularCount)
    }, false);
    thumbnailsDiv.appendChild(thumbnailImg);
}

div.appendChild(thumbnailsDiv);


imgSectionDiv.appendChild(div);


for (var i = 0; i < webObjectLiteral[c].links.length; i++) {

    let ul = document.getElementById(`web-ext-showcase`);
    let extIcon = '<i style="font-size: .8em" class="fas fa-external-link-alt"></i>';

    if (webObjectLiteral[c].links[i].github !== "") {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = webObjectLiteral[c].links[i].github;
        a.innerHTML = `${webObjectLiteral[c].links[i].title} github ${extIcon}`;
        a.className = 'github-style';
        li.appendChild(a);
        ul.appendChild(li);
    }

    if (webObjectLiteral[c].links[i].demo !== "") {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = webObjectLiteral[c].links[i].demo;
        a.innerHTML = `${webObjectLiteral[c].links[i].title} demo ${extIcon}`;
        a.className = 'demo-style';
        li.appendChild(a);
        ul.appendChild(li);
    }
}

subNum = c - 1;
addNum = parseInt(c) + 1;
console.log(subNum)
console.log(addNum)
let previousPage = (subNum > 0 && subNum < 6) ? subNum : (subNum < 0) ? 5 : 0;
let nextPage = (addNum > 0 && addNum < 6) ? addNum : (addNum > 5) ? 0 : 5;

document.getElementById("goBack").href = `./web.html?key=${previousPage}`;
document.getElementById("goForward").href = `./web.html?key=${nextPage}`;

const icon = (webObjectLiteral[c].type === 'showcase') ? '<i style="background: rgb(218, 105, 0); padding: 5px 10px;" class="fas fa-thumbtack"></i>' : '';

document.getElementById("exitBack").href = (webObjectLiteral[c].type === 'showcase') ? './index.html#webdev' : './index.html#misc';

document.getElementById("web-title").innerHTML = `${icon} ${webObjectLiteral[c].title}`;

document.getElementById("current-page").innerHTML = webObjectLiteral[c].title;
document.getElementById("current-page").href = `./web.html?key=${c}`;


var ul = document.getElementById("web-bullet-points");

for (var i = 0; i < webObjectLiteral[c].content[0].description.length; i++) {

    var singleLi = webObjectLiteral[c].content[0].description[i];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(singleLi));
    ul.appendChild(li);

}

var div = document.getElementById("web-stacks");

for (var j = 0; j < webObjectLiteral[c].stacks.length; j++) {

    if (j > 0) {
        var smallerContent = document.createElement('div');
        smallerContent.className = 'smaller';
    }

    var ul = document.createElement('ul');
    ul.id = "web-stack";
    var p = document.createElement('p')
    var b = document.createElement('b')

    b.innerHTML = webObjectLiteral[c].stacks[j].title;
    p.appendChild(b);

    for (var i = 0; i < webObjectLiteral[c].stacks[j].stack.length; i++) {

        var singleLi = webObjectLiteral[c].stacks[j].stack[i].name;
        var li = document.createElement('li');

        li.classList.add(webObjectLiteral[c].stacks[j].stack[i].color)

        li.appendChild(document.createTextNode(singleLi));
        ul.appendChild(li);

    }

    if (j > 0) {
        smallerContent.appendChild(p);
        smallerContent.appendChild(ul);
        div.appendChild(smallerContent);
    } else {
        div.appendChild(p);
        div.appendChild(ul);
    }

}