const form = document.querySelector('.forme')
const nomeContato = document.getElementById('nome-contato')
const numeroContato = document.getElementById('numero-contato')


form.addEventListener('submit',function(e){
    e.preventDefault()

    if (!contatoJaExiste(nomeContato.value)) {
        adicionar();
    } else {
        contatoexiste()
    }

})


function adicionar(){

    var linha = '<tr>'
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${numeroContato.value}</td>`
    linha +='</tr>'

    const tabela = document.querySelector('tbody')
    tabela.innerHTML += linha
    
    const mensagem = document.getElementById('mensagem')
    mensagem.innerHTML = `Contato salvo`
    mensagem.classList.remove('erro')
    mensagem.classList.add('sucesso')
    
    nomeContato.value = ''
    numeroContato.value = ''


}


function contatoJaExiste(nome) {
    const nomesExistentes = Array.from(document.querySelectorAll('tbody td:first-child')).map(td => td.textContent);
    return nomesExistentes.includes(nome);
}


function contatoexiste(){
    const exist = document.getElementById('mensagem')
    exist.innerHTML = `Contato existente`
    exist.classList.remove('sucesso')
    exist.classList.add('erro')
}