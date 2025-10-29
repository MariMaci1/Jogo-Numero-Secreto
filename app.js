let listaDeNumerosSorteados = [];
let numeroTotal = 100   ; 
let nomeUsuario = prompt("Digite seu nome:");
console.log (nomeUsuario);

let numeroSecreto = numeroAleatorio(); 

    function exibirTexto (tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
    }
    function exibirMensagemInicial(){
        exibirTexto("title", "Número Secreto");
        exibirTexto("h1", "Hora do Desafio!");
        exibirTexto("p", `escolha um Número entre 1 e ${numeroTotal}`);
        exibirTexto("h2",`Olá ${nomeUsuario}, bom jogo!`);
    }
exibirMensagemInicial();
    function verificarChute(){
        let chute = document.querySelector("input").value;
        console.log("O botão foi clicado.");
            if(chute == numeroSecreto){
                exibirTexto("h1", "Parabéns, Você Acertou!");
                exibirTexto("p",`Você acertou o número secreto com ${tentativa} ${palavraTentativa}`);
                exibirTexto("h2","");
                document.getElementById("reiniciar").removeAttribute("disabled");
            } else if(chute < numeroSecreto){
                exibirTexto("p", "O número secreto é maior.");
                        exibirTexto("h2","");
            } else{
                exibirTexto("p", "O número secreto é menor.");
                        exibirTexto("h2","");
            }
        tentativa++;
        limparCampo();
    }

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroTotal+1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length ;
        if(quantidadeDeNumerosSorteados == numeroTotal){
            listaDeNumerosSorteados = [];
        }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

let tentativa = 1;
let palavraTentativa = tentativa >1? "tentativa" :"tentativas";

function limparCampo(){
    chute = document.querySelector("input");
    //"input" é o campo para colocar o valor(os número de 1 a 100).
    chute.value="";
}

    function reiniciarJogo(){
        numeroSecreto = numeroAleatorio();
        limparCampo();
        tentativa = 1;
        exibirMensagemInicial();
        ducument.getElementById("reiniciar").setAttribute("disabled",true);
    }