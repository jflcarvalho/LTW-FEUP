function addEventListeners(){
    let plusButtons = document.querySelectorAll('div#products ul li a');
    plusButtons.forEach(element =>{
        element.addEventListener('click', addQty.bind(element));
    });
    document.querySelector('a.buy').addEventListener('click', buy);
}

function addQty(){
    this.parentNode.querySelector('span.qty').innerText++;
}

function buy(){
    let products = [];
    let productsList = document.querySelectorAll('div#products ul li');
    productsList.forEach(element =>{
        let product = new Object();
        product.name = element.innerText.match(/^(.*?)(?=:)/)[0];
        product.qty = element.querySelector('span.qty').innerText;
        products.push(product);
    });
    let request = new XMLHttpRequest;
    request.open('POST', 'calculatetotal.php');
    request.onload = function(data){
        let replyValue = data.target.response;
        if(replyValue < 0)
            document.querySelector('p.total').innerText = "not enough stock";
        else
            document.querySelector('p.total').innerText = replyValue;
    };
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send("products=" + JSON.stringify(products));
}

addEventListeners();