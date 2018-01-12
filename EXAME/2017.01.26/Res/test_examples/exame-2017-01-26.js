document.querySelectorAll('div#photos ul li img').forEach(element => {
    element.addEventListener('click', clickImage.bind(element));
});

function clickImage() {
    let large_image = document.getElementsByClassName("large")[0];
    large_image.src = "large/" + this.attributes.src.nodeValue;
}

document.getElementsByClassName('load')[0].addEventListener('click', loadImages);

function loadImages() {
    let request = new XMLHttpRequest();
    request.open('GET', 'getrandomimages.php');
    request.onload = function (data) {
        let arrayResponse = JSON.parse(data.target.response);
        arrayResponse.forEach(element => {
            let li = document.createElement('li');
            let img = document.createElement('img');
            li.appendChild(img);
            img.src = element;
            img.addEventListener('click', clickImage.bind(img));
            document.querySelector('div#photos ul').appendChild(li);
        });
    };
    request.send();
}