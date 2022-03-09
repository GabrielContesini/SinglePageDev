document.querySelector('.hamburguer').addEventListener('click', ()=> {
    document.querySelector('.container').classList.toggle('show-menu');
});

document.querySelector("#quantidade").addEventListener('change', atualizarPreco)
document.querySelector("#js").addEventListener('change', atualizarPreco)
document.querySelector("#layout-sim").addEventListener('change', atualizarPreco)
document.querySelector("#layout-nao").addEventListener('change', atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})


function atualizarPreco(){
    const quantidade = document.querySelector("#quantidade").value
    const temJS = document.querySelector("#js").checked
    const incluiLyout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value


    let preco = quantidade * 100;

    if(temJS) preco *= 1.1

    if(incluiLyout) preco += 500;

    let taxaUrgencia = 1 - prazo*0.1;
    
    preco *= 1 + taxaUrgencia



    document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`;
}
