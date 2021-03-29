const rand = (min, max) => String(Math.floor(Math.random() * (max - min) + min));

const geraNumero = () => String(rand(0,10));

const geraMaiuscula = () => String.fromCharCode(rand(65,91));

const geraMinuscula = () => String.fromCharCode(rand(97,122));

const geraSimbolo = () => {
    const simbolos = ['\'','"','!','@','#','$','%','&','*','(',')','-','_','¬','¢','£','+','=','§','`','´','[',']','{','}','ª','º','^','~','/','?','°',';',':','>','.','<',',','|','\\'];
    const posicao = rand(0,simbolos.length);
    return simbolos[posicao];
}

export default (tamanho, numero, maiuscula, minuscula, simbolo) => {
    //cria um array só com as funcao geradoras que foram passadas
    const opcaoDeFuncao = [];
    numero && opcaoDeFuncao.push(geraNumero);
    maiuscula && opcaoDeFuncao.push(geraMaiuscula);
    minuscula && opcaoDeFuncao.push(geraMinuscula);
    simbolo && opcaoDeFuncao.push(geraSimbolo);

    const senhaArray = [];
    //Só vai parar quando o tamanho passado for maior que o tamanho do array
    while (tamanho > senhaArray.length){
        //faz um loop sorteando a posicao no vetor de funcao, passando a funcao que vai usar, e gerando e inserindo um caracter no array
        let posicao = rand(0,opcaoDeFuncao.length);
        let caracterCriado = opcaoDeFuncao[posicao]();
        senhaArray.push(caracterCriado);
    }
    //junta o array em uma string e mantem o tamanho
    return senhaArray.join('');
}