const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');


    result = campoA.value < campoB.value
    

    if(result) {
        const resultado = document.querySelector('.resposta');
        resultado.innerHTML = 'O número do campo B, de valor ' + campoB.value + ', é maior do que ' + campoA.value + '. Portanto é válido!';
        resultado.classList.remove('erro');
        resultado.classList.add('certo');
    } else {
        const resultado2 = document.querySelector('.resposta');
        resultado2.innerHTML = 'O número do campo B, de valor ' + campoB.value + ', é menor do que ' + campoA.value + '. Portanto é inválido!';
        resultado2.classList.remove('certo');
        resultado2.classList.add('erro');
    }
})