let resposta = document.getElementById("resposta")
let gravar = document.getElementById("gravar")
let valor = document.getElementById("valor")
let hamburguerPre = 16
let SucoPre = 6
let chocolatePre = 4
let chocqua = []
let sucoqua = []
let hamburguerqua = []

gravar.addEventListener("click",()=>{
   let quahamburguer = Number(document.getElementById("quahamburguer").value)
   let quasuco = Number(document.getElementById("quasuco").value)
   let quachocolate = Number(document.getElementById("quachocolate").value)

   chocqua.push(quachocolate)
   sucoqua.push(quasuco)
   hamburguerqua.push(quahamburguer)
   
   
   console.log(quahamburguer)
   console.log(quasuco)
   console.log(quachocolate)
   
   
})
valor.addEventListener("click",()=>{
    let valorchoc = chocqua * chocolatePre
    let valorsuco = sucoqua * SucoPre
    let valorhamburguer = hamburguerqua * hamburguerPre

    let valorTotal = valorchoc + valorsuco + valorhamburguer

    console.log(valorTotal)
    resposta.innerHTML = "O valor ficou de "+valorTotal

})


