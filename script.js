const pokemon_name = document.querySelector(".pokemon_name")
const number = document.querySelector(".pokemon_number")
const pokemon_image = document.querySelector(".pokemon_image")
const form = document.querySelector(".form")
const input = document.querySelector(".input_search")
const btn_prev = document.querySelector(".btn_prev")
const btn_next = document.querySelector(".btn_next")
const peso = document.querySelector(".peso")
const altura = document.querySelector(".altura")
const hab1 = document.querySelector(".habilidade-1")
const hab2 = document.querySelector(".habilidade-2")
const info = document.querySelector(".informacoes")
const btn = document.querySelector(".btn")

let contador = 1





const fetchPokemon = async (pokemon) => {
    

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
  if(APIResponse.status === 200) {
    pokemon_image.style.display = "block"
     const data = await APIResponse.json()
    return data
  } else{
    pokemon_image.style.display = "none"
    pokemon_name.innerHTML = "Not found"
  }
   
}


const renderPokemon = async (pokemon) => {
    pokemon_name.innerHTML = "Loading..."
    number.innerHTML = ""

    const data = await fetchPokemon(pokemon)
if(data){
    pokemon_name.innerHTML= data.name 

    number.innerHTML= data.id + " - "

    pokemon_image.src = data["sprites"]["front_default"]

    peso.innerHTML = data.weight /10 + " Kg"

    altura.innerHTML = data.height /10 + " M"

    hab1.innerHTML = data["abilities"]["0"]["ability"]["name"]

    hab2.innerHTML = data["abilities"]["1"]["ability"]["name"]


    input.value= ""

    contador = data.id
}
    
}

form.addEventListener("submit", (event) =>{
event.preventDefault()

renderPokemon(input.value.toLowerCase())

})

btn_next.addEventListener("click", () => {
contador++
renderPokemon(contador)

})

btn_prev.addEventListener("click", () => {
    if(contador > 1){
        contador--
        renderPokemon(contador)   
    }
   
    })


 btn.addEventListener("click", function(){
  if(info.classList.contains("show-informacoes")){
    info.classList.remove("show-informacoes")
  }else{
    info.classList.add("show-informacoes")
  }

 })   

renderPokemon(contador)



// Altura, Peso, Habilidades