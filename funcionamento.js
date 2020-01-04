function capturarDados(){
    //Pegando o peso
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    //Testo se o usuario digitou algo no peso
    if(peso != null && peso != undefined && peso != "" && altura != null && altura != undefined && altura != ""){
        if(!isNaN(peso) && !isNaN(altura)){
            //Converto o peso para float
            peso = parseFloat(peso);
            //Converto a altura para float
            altura = parseFloat(altura);
            if(peso >= 1 && peso <= 400 && altura >= 0.30 && altura <= 2.80){
                var x = calcularIMC(peso, altura);
                escreverIMC(x);
                criarBotao();
            }else alert("Digite dados coerentes!");
        }else alert("Digite apenas número!");
    }else alert("Digite um peso e altura válidos!");
    //Limpando os campos
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}
function escreverIMC(IMC){
    //Pegando o conteudo interno da div para concatenar
    var x = document.getElementById("conteudo").innerHTML;
    //Concatenando o valor
    x = "<input id = 'resultado' class='campo_digitacao' type='text'><br><br>"
    //Colocando os dados na div
    document.getElementById("conteudo").innerHTML = x;
    document.getElementById("resultado").value = IMC;
}
function calcularIMC(peso, altura){
    return Math.ceil(peso / (altura * altura));
}
function criarBotao(){
    //Pegando o conteudo interno da div do botao
    var x = document.getElementById("botoes").innerHTML;
    //Vou criar um novo botao
    x = "<button type='button' id='botao' onclick='direcionarPag();'>Novo calculo</button>"
    //Repassando o conteudo
    document.getElementById("botoes").innerHTML = x;
}
function direcionarPag(){
    //direcionando para a pag
    window.open("IMC.html", "_self");
}
function capturarDadosIMG(){
    //Comecando a pegar os valores, por ordem.
    //Idade
    var idade = document.getElementById("idade").value;
    //Pegando o IMC
    var imc = document.getElementById("imc").value;
    //Pegando o sexo
    var sexo = document.getElementById("sexo").value;
    //Verifico se os campos nao estao vazios
    if(idade != undefined && idade != "" && imc != undefined && imc != "" && sexo != "ND"){
        //Testo se são numeros
        if(!isNaN(idade) && !isNaN(imc)){
            //Testo se os dados são coerentes
            if(idade >= 0 && idade <= 120 && imc >= 1 && imc <= 500){
                //Agora vou chamar a funcao que calcula o IMG
                img = Math.ceil(calcularIMG(idade, imc, sexo));
                //Funcao para colocar os dados na tela
                escreverIMG(img);
                mudarBotaoIMG();
            }else alert("Informe apenas dados coerentes!");
        }else alert("Informe apenas números!");
    }else alert("Nenhum campo pode estar vazio!");
}
function mudarBotaoIMG(){
    //Pegando o conteudo da para mudar o botao calcular
    x = document.getElementById("botoes").innerHTML;
    x = "<button type'button' id='botao' onclick='novoIMG();'>Novo cálculo</button>"; 
    document.getElementById("botoes").innerHTML = x + "<br><br>";
}
function novoIMG(){
    window.open("IMG.html", "_self");
}
function escreverIMG(img){
    //Acessando o innerHTML, ou seja, o conteudo interno da div de digitação de dados.
    x = document.getElementById("conteudo").innerHTML;
    //Modificando o conteudo
    x = "<input id = 'resultado' class='campo_digitacao' type='text'><br><br>"
    //Colocando na div
    document.getElementById("conteudo").innerHTML = x;
    //Colocando o img no campo
    document.getElementById("resultado").value = img;
}
function calcularIMG(idade, imc, sexo){
    //Vou converter a idade e o imc para numeros
    imc = parseInt(imc);
    idade = parseInt(idade);
    //Vou verificar se a pessoa é do sexo masculino ou feminino, para realizar o calculo
    if(sexo == "M")
        img = (1.20 * imc) + (0.23 * idade) - (10.8 * 1) - 5.4;
    if(sexo == "F")
        img = (1.20 * imc) + (0.23 * idade) - (10.8 * 0) - 5.4;
    return img;
}