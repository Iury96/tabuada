const resposta = document.getElementById("resposta");
const valorTabuada = document.getElementById("valorTabuada");
const botao = document.getElementById("botao");


function multiplicar() {

    const numero1 = parseFloat(document.getElementById("numero2").value);
    const numero2 = parseFloat(document.getElementById("numero1").value);

    resposta.innerHTML = "";
    valorTabuada.innerHTML = `<h2>Tabuada do número: ${numero1}</h2>`;

    if (isNaN(numero1) || isNaN(numero2)) {
        resposta.innerHTML = `<p>Por favor, preencha ambos os campos com números válidos</p>`;
        valorTabuada.innerHTML = `<h2>Tabuada do número:</h2>`;
        return;
    }


    let i = 1;
    while (i <= numero2) {
        const resultado = numero1 * i;
        resposta.innerHTML += `<p>${numero1} x ${i} = ${resultado}</p>`;
        i++;
    }
}
botao.addEventListener('click', multiplicar);