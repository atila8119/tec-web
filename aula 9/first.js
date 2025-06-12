const box = document.getElementById('box');

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "lightgreen";
    box.innerText = "Mouse aqui!";
});


box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "red";
    box.innerText = "Passe o mouse aqui";
});

box.addEventListener("mouseleave", function(){
    box.style.backgroundColor = "violet";
    box.innerText = "saiu o mouse";
});


box.addEventListener("click", function(){
    box.style.backgroundColor = "yellow";
    box.innerText = "Você clicou";

});