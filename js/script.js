var botaoCript = document.querySelector('#btn-cripto')
var botaoDescrip = document.querySelector('#btn-descripto')
var botaoCopy = document.querySelector('#btn-copy')
var botaoPaste = document.querySelector('#btn-paste')
var texto = document.getElementById('input-texto')
var textoCript = document.getElementById('msg')
var texto2 = document.getElementById('input-texto')
var textoCript2 = document.getElementById('msg')
let textoEscrito
let resultado
let textoEscrito2
let resultado2




botaoCript.addEventListener('click', function(event){
    event.preventDefault()

    textoEscrito = texto.value
    resultado = criptografar(textoEscrito)
    textoCript.value = resultado
    
    })

botaoDescrip.addEventListener("click", function(event){
        event.preventDefault()
    
        textoEscrito2 = textoCript2.value
        resultado2 = Uncriptografar(textoEscrito2)
        textoCript2.value = resultado2
      })

botaoCopy.addEventListener("click", function(event){
        const inputTest = document.getElementById('msg')
        inputTest.select()
        document.execCommand('copy')

  })      

botaoPaste.addEventListener("click", async (e) =>{
        e.preventDefault()
        const response = await navigator.clipboard.readText();
        texto.value = response;

})  


const validarCriptografia = (texto) => {
    return /^[a-z\s]*$/.test(texto)
  };


const criptografar = (str) => {
    if (validarCriptografia(str)) {
      return  str
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat")
    }
    return "caracteres normais e minusculos voce pode usarao use ascento";
  }


  const Uncriptografar = (str) => {
    if (validarCriptografia(str)) {
      return  str
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u")
    }
    return "caracteres normais e minusculos voce pode usar";
  };






