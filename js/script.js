var botaoCript = document.querySelector('#btn-cripto')
var botaoDescrip = document.querySelector('#btn-descripto')
var botaoCopy = document.querySelector('#btn-copy')
var botaoPaste = document.querySelector('#btn-paste')
var texto = document.getElementById('input-texto')
var textoCript = document.getElementById('msg')
let textoEscrito
let resultado


botaoCript.addEventListener('click', function(event){
    event.preventDefault()

    textoEscrito = texto.value
    resultado = criptografar(textoEscrito)
    textoCript.value = resultado
    
    })

botaoDescrip.addEventListener("click", function(event){
        event.preventDefault()
    
        textoEscrito = textoCript.value
        resultado = Uncriptografar(textoEscrito)
        textoCript.value = resultado
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
    return "Por favor use letras minúsculas e sem acentos";
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
    return "Por favor use letras minúsculas e sem acentos";
  };






