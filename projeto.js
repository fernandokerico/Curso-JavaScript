function verificarEntrada(){
    NomeConvidado = document.getElementById('nome').ariaValueMax;
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas','Carol','Jonathan']
    if(ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Voce pode entrar!'
    } else{
        document.getElementById('PermissaoDeEntrada').innerText= 'voce não pode perder de entrar"'
    }
}
*/