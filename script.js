let resposta = document.getElementById("resposta");
let gravar = document.getElementById('gravar');
let dadasdas = ["", "", ""]
let uniHamburguer = 16 
let uniSuco = 6 
let uniChocolate = 4 
let precoTotal = 0

lanche = []
precoUni = []
gravar.addEventListener('click', () => {
    let alimento = document.getElementById("alimento").value;
    let quantidade = document.getElementById("quantidade").value;

    console.log(alimento)

    switch (alimento) {
        case "hamburguer":
            precoUni.push((quantidade)* uniHamburguer);
            console.log(precoUni)
            lanche.push(alimento)
            break;
        case "suco":
            precoUni.push((quantidade)* uniSuco);
            console.log(precoUni)
            lanche.push(alimento)
            break;
        case "chocolate":
            precoUni.push((quantidade)* uniChocolate);
            console.log(precoUni)
            lanche.push(alimento)
            break;
        default:
            break;
    }


})

calcularPreco.addEventListener('click', () =>{

    for (let i = 0; i < precoUni.length; i++) {
        precoTotal += precoUni[i]
        console.log(precoTotal)
    }
    resposta.innerHTML = `Você pediu esses lanches: ${lanche} <br>`
                         +`e o valor total foi de ${precoTotal}`  })
