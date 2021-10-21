input = document.getElementById("inputTask")

button = document.getElementById("topFive")

h1Text = document.getElementById("title")

spanModify = document.querySelector(".span")

topFive = document.getElementById("topFive")

groupTasks = []

let getValue

let newList

box = document.querySelector(".alert")

editText = document.querySelector(".editText")

divEdit = document.querySelector(".divEdit")

//Selecionando através do DOM

// Contagem do Número de caracteres digitados
let updateText = ()=>{
  let typeValue = input.value.length
  if(typeValue <= 40){
    spanModify.innerHTML = typeValue
  }
  
}
// Setar um mensagem motivacional

let startMotivation = ()=>{

  divEdit.classList.add("editDisplay")

  motivationText = ["Quando pensar em desistir, lembre-se porque começou",

"Se não puder fazer tudo, faça tudo que puder",

"Comece onde você está. Use o que você tem. Faça o que puder", 

"O corpo alcança o que a mente acredita", 

"O melhor está por vir. Acredite!", 

"Se for pra ser, será. Se tá demorando, é porque o melhor ainda está por vir."]

  for(content in motivationText){
    operation = Math.ceil(Math.random() * content)


    switch(operation){
      case 0:
        editText.innerHTML = motivationText[0]
        break;

      case 1:
        editText.innerHTML = motivationText[1]
        break;

      case 2:
        editText.innerHTML = motivationText[2]
        break;

       case 3:
         editText.innerHTML = motivationText[3]
         break;

       case 4:
         editText.innerHTML = motivationText[4]
         break;
         
       case 5:
         editText.innerHTML = motivationText[5]
    }
   }
}



// Controle para Salvar o valor
let saveValue = (filter)=>{

  getValue = filter;
  groupTasks.push(getValue)
  console.log(filter)

}

// Controle do Display do Alerta 
let verification = ()=>{
  box.style.display = "flex"
}
let closeVerifi = ()=>{
  box.style.display = "none"
}
// Fim do controle do Display do Alerta


// Criação das Tasks 
  let addTasks = ()=>{
    if(input.value === ""){
      setTimeout(verification, 1000)
      setTimeout(closeVerifi, 6000)
      box.classList.add("transitionEffect")
      return verification
    }
  
      
    const todoDiv = document.createElement("div")
    document.body.appendChild(todoDiv)

    newList = document.createElement("li")
    todoDiv.appendChild(newList)
    newList.classList.add("newLister")

    newButton = document.createElement("button")
    newButton.classList.add("checkButton")
    todoDiv.appendChild(newButton)
    newButton.innerHTML = "<img src= 'done_black_24dp.svg'>"

    newButton.addEventListener("click", ()=>{
      todoDiv.classList.add("check")
    })


    deleteButton = document.createElement("button") 
    deleteButton.classList.add("deleteBtn")
    todoDiv.appendChild(deleteButton)
    deleteButton.innerHTML = "<img src='delete_black_24dp.svg'>"

    deleteButton.addEventListener("click", ()=>{
      todoDiv.classList.add("todo")
    })

    valueInput = input.value
    
    newList.innerHTML = [valueInput]

    input.value = ""

   
  }

  
  

/*Criação das Funções de Salvar e Adicionar Tasks */