import { PALAVRAS_RUINS } from "./palavrasruins";

const botaoMostraPalavras =document.querySelector ('click', botaoMostraPalavra);

botaoMostraPalavras.addEventListener ('click',mostraPalavraChave);

function mostraPalavraChave (){
const texto = document.querySelector ('#entrada-de-texto').value;
const csampoResultado = document.querySelector ('#resultado-palavrachave');
const palavrachave = processaTexto (texto);

csampoResultado.textContent = palavrachave.join(",");
}