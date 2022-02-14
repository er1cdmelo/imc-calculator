

const resultado = document.getElementById('resultado');
const resultadobox = document.getElementById('resultadobox');
const bg = document.getElementById('bg');
let conclusao;
let cor;
let fundo;

function getResult() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    altura = altura[0] + '.' + altura.substr(1);
    let calculo = peso / (altura * altura);

    if(calculo < 18.5){
        conclusao = 'Magreza';
        cor = '#ded837'
        fundo = 'linear-gradient(22deg, rgba(249,231,83,1) 0%, rgba(255,244,163,0.9962359943977591) 91%)'
    }
    else if(calculo >= 18.5 && calculo <= 24.9){
        conclusao = 'Normal';
        cor = '#47d14c'
        fundo = 'linear-gradient(22deg, rgba(112,237,104,1) 0%, rgba(207,242,183,0.9962359943977591) 91%)'
    }
    else if(calculo >= 25 && calculo <= 29.9){
        conclusao = 'Sobrepeso';
        cor = '#5ca7d6'
        fundo = 'linear-gradient(22deg, rgba(45,86,153,1) 0%, rgba(176,212,237,0.9962359943977591) 91%)'
    }
    else if(calculo >= 30 && calculo <= 39.9){
        conclusao = 'Obesidade';
        cor = '#f09f26'
        fundo = 'linear-gradient(22deg, rgba(242,176,13,1) 0%, rgba(254,231,176,0.9962359943977591) 91%)'
    }
    else{
        conclusao = 'Obesidade Grave';
        cor = '#e31e1e'
        fundo = 'linear-gradient(22deg, rgba(201,3,3,1) 0%, rgba(219,93,93,0.9962359943977591) 91%)'
    }


    console.log(peso);
    console.log(altura);
    console.log(calculo);
    resultado.innerHTML = conclusao;
    resultado.style.color = cor;
    resultadobox.style.border = '1px solid ' + cor;
    bg.style.background = fundo;
}