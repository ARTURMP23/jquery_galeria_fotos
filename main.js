$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })


$('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

$('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoDaNovaimagem = $('endereco-imagem-nova').val()
        const novoItem = $('<li style="display:none">/li>')
        $(`<img src ="${enderecoDaNovaimagem}" />`).apendTo(novoItem)
        $(`
        <div class src ="overlay-imagem-link">

            <a href= "${enderecoDaNovaImagem}" target="_blank" title= "Ver Imagem em tamanho real" 
        </div>
        `).apendTo(novoItem)
        $(novoItem).apendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereco-imagem-nova').val('')
        
    })
})
 
