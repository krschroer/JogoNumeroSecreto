
let listaNumerosSorteados = [];
let numeroSecreto = geraNumeroAleatorio();

exibeTextoTela('h1','Jogo do Numero Secreto');
exibeTextoTela('p','Escolha um numero entre 1 e 10');




function mensagemInicial(){
    exibeTextoTela('h1','Jogo do Numero Secreto');
    exibeTextoTela('p','Escolha um numero entre 1 e 10');
}

function mensagemFinal(){
    exibeTextoTela('h1', 'Fim de Jogo!')
    exibeTextoTela('p', 'Você venceu!')
}

function exibeTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificaChute() {
    let chute = document.querySelector('input').value;
    if (chute < numeroSecreto) {
        alert('Numero é maior!');
    } else if (chute > numeroSecreto){
        alert('Numero é menor!');
    } else {        
        mensagemFinal();
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', true);
        document.querySelector('input').setAttribute('disabled', true);
        alert('Acertou!');            
    }
    limpaCampo();
}

function reiniciarJogo(){
    numeroSecreto = geraNumeroAleatorio();
    mensagemInicial();    
    limpaCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chute').removeAttribute('disabled');  
    document.querySelector('input').removeAttribute('disabled');
}

function limpaCampo(){
    document.querySelector('input').value = '';
}

function geraNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let qtdeElementosLista = listaNumerosSorteados.length;
    if (qtdeElementosLista == 10) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido) ) {
        return geraNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}