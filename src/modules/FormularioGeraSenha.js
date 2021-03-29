import geraNovaSenha from './Geradores';
export default () => {
    const tamanho = document.querySelector('#tamanho');
    const numero = document.querySelector('#numero');
    const maiuscula = document.querySelector('#maiuscula');
    const minuscula = document.querySelector('#minuscula');
    const simbolo = document.querySelector('#simbolo');
    const botao = document.querySelector('#gerar');
    const resultado = document.querySelector('#resultado');
    
    function imprima(msg){
        resultado.innerHTML = msg;
    }

    botao.addEventListener('click', e => {
        e.preventDefault();
        if(tamanho.value==='') alert('Marque um tamanho para poder gerar senha!');
        if(!numero.checked && !maiuscula.checked && !minuscula.checked && !simbolo.checked) alert('Todas as opções estão desmarcadas!\n\nÉ preciso marcar pelo menos uma opção!');
        const senhaGerada = geraNovaSenha(tamanho.value, numero.checked, maiuscula.checked, minuscula.checked, simbolo.checked);
        console.log(senhaGerada);
        imprima(senhaGerada);
    });
}