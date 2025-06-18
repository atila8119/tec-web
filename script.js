//Sccript para quando clicar no botão ENTRAR seja direcionado para o painel de finanças
const botao = document.getElementById("botao-entrar");

botao.addEventListener("click", function(event){
    event.preventDefault(); // impede envio do form
    window.location.href = "https://ismaelbraz1.github.io/Tec-Web/#";
});


