// capturar evento de submit do formulário
const form = document.querySelector('.form');
// adiciona um listener para o submit do botão  calcular
form.addEventListener('submit',function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso){
        setResult('Peso inválido', false);
        return;
    }
    if(!altura){
        setResult('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const classficationImc = getClassfication(imc);

    const msg = `Seu IMC é: ${imc} (${classficationImc}).`;
    setResult(msg, true);
});
// Pega a classficação do IMC
function getClassfication(imc){
    const classfication = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9)     return classfication[5];
    if(imc >= 34.9)     return classfication[4];
    if(imc >= 29.9)     return classfication[3];
    if(imc >= 24.9)     return classfication[2];
    if(imc >= 18.5)     return classfication[1];
    if(imc < 18.5)      return classfication[0];
}
//Calcula o IMC
function getImc(peso, altura){
    const imc = peso/(altura**2);
    return imc.toFixed(2);
}
//Cria um paragrafo 
function createP(){
    const p = document.createElement('p');
    return p;
}
// Exibeo resultado do calculdo do IMC com uma mensagem dentro do paragrafo
function setResult (msg, isValid){
    const result = document.querySelector('.result');
    result.innerHTML = '';
    const p = createP();
    if(isValid) p.classList.add('paragrafo-resultado');
    else p.classList.add('invalid')
    p.innerHTML = msg;
    result.appendChild(p);
}