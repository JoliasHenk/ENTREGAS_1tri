const maskElements = document.querySelectorAll("[data-mascara]")

 const fnMasks = {
     matricula: maskMatricula
 }

 function maskMatricula(el) {
     el.addEventListener("keydown", ev => { 
         const key = ev.key
         if (key == "a") {
             ev.preventDefault()
         }
     })
 }

 maskElements.forEach(el => {
     const maskName = el.dataset.mascara
     const fnMascara = fnMasks[maskName]
     fnMascara(el)
 })

const actionBar = document.querySelector("div.action-bar")
const btAdd = actionBar.querySelector(".bt-add")
const container = document.querySelector(".container-data")
const templateModalAluno = container.querySelector("template.aluno")

btAdd.addEventListener("click", () => {
    const cloneModal = templateModalAluno.content.cloneNode(true)
    container.prepend(cloneModal)
})

container.addEventListener("click", ev => {
    const btClose = ev.target.closest(".bt-close")
    if (btClose) {
        const modal = ev.target.closest(".modal")
        modal.remove()
    }
    
   const btnSave = ev.target.closest(".btn_save")
   if (btnSave){

        const form = thisModal.querySelector("form")
        forms=new FormData(form)

        foms.forEach(value =>{
            console.log(value)
        })
        if (forms.get("nome").trim() != ""){
            alert(`${forms.get("nome")} cadastrado!`)
        }
   }
})

function validacao() {
    let form= document.getElementById('form')
    let nome = document.getElementById('nome').value
    let nometext=document.getElementById('nome')

    let text=document.getElementById('text')
    let pattern=/^[A-z ]+$/
    if(nome.match(pattern)) {
        
        form.classlist.remove('invalid')
        form.classlist.add('valid')
        text.innerHTML="nome válido"
        text.style.color="green"
    } else {
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = "nome inválido"
        text.style.color = "red"
    }
    if(nome == '') {
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = '#00ff00'
    }
}