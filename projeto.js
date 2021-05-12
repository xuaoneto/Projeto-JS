for (k in Data){
    document.querySelector('.listjson').insertAdjacentHTML('beforeend',`<li class="visible convidado">${Data[k].Nome}</li>`)
}
addConvidados = () =>{
    let novo = document.getElementById('novoNome').value
    if (novo.trim() == ''){return}
    document.querySelector('.listjson').insertAdjacentHTML('beforeend',`<li class="visible convidado">${novo}</li>`)
}


let campoFiltro = document.getElementById('buscar')
campoFiltro.addEventListener("input", function () {
    console.log('evento ok')
    let convidados = document.querySelectorAll(".convidado");
    console.log(campoFiltro.value);
    console.log(convidados);
    if (this.value.length > 0) {
        var regex = new RegExp(this.value, "i");
        for (convidado of convidados){
            if (!convidado.textContent.match(regex)) {
                convidado.classList.remove('visible')
            } 
            else {
                convidado.classList.add('visible')
            }
        }
    }
    else{
        for (convidado of convidados){
            convidado.classList.add('visible')
        }
    }
})