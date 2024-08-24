var textInput = document.querySelector("textarea#input-texto");
var output = document.querySelector("div.background-output");

function criptografar() {
  var texto = textInput.value;

  if (validar(texto)) {
    var resultCripto = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    console.log(resultCripto);

    // Limpa o conteúdo do output
    output.innerHTML = '';

    // Cria o textarea de output
    var textarea = document.createElement('textarea');
    textarea.id = "output-texto";
    textarea.readOnly = true;
    textarea.textContent = resultCripto;
    output.appendChild(textarea);

    // Cria o botão de copiar
    var button = document.createElement('button');
    button.className = "btn-copiar";
    button.id = "copiar";
    button.textContent = "Copiar";
    button.addEventListener('click', copiar);
    output.appendChild(button);
  } else {
    alert("Texto não permitido");
  }
}

function descriptografar() {
  var texto = textInput.value;

  if (validar(texto)) {
    var resultDescripto = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    output.innerHTML = '';

    var textarea = document.createElement('textarea');
    textarea.id = "output-texto";
    textarea.readOnly = true;
    textarea.textContent = resultDescripto;
    output.appendChild(textarea);

    var button = document.createElement('button');
    button.className = "btn-copiar";
    button.id = "copiar";
    button.textContent = "Copiar";
    button.addEventListener('click', copiar);
    output.appendChild(button);
  } else {
    alert("Texto não permitido");
  }
}

function copiar() {
  var textarea = document.querySelector("textarea#output-texto");

  // Seleciona o texto dentro do textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Tenta copiar o texto selecionado
  try {
    var sucesso = document.execCommand('copy');
    if (sucesso) {
      alert("Texto copiado!");
    } else {
      alert("Falha ao copiar o texto.");
    }
  } catch (err) {
    console.error("Erro ao copiar texto: ", err);
  }
}

function validar(textoDigitado) {
  const regex = /[A-ZÀ-Ü0-9]/;
  return !regex.test(textoDigitado);
}