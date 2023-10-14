/* Cambia los div a color negro al hacer click sobre ellos */

const divscolores = document.querySelectorAll(".tamanosdiv")
divscolores.forEach(element => {
    element.addEventListener("click", function(){
        element.style.backgroundColor = "black"
    })
});

/* Al presionar las teclas a, s o d, se deberá cambiar el color del div
“key” a rosado, naranjo o celeste respectivamente.*/

let coloractual = ""
document.addEventListener("keydown", function(event){
    if(event.key=="a"){
        coloractual = "pink"
    }
    if(event.key=="s"){
        coloractual = "orange"
    }
    if(event.key=="d"){
        coloractual = "skyblue"
    }
    document.getElementById("key").style.backgroundColor = coloractual
        
}
)

/* Al presionar las teclas q, w o e se
deberá crear un div nuevo de las mismas dimensiones antes mencionadas
con los colores morado, gris y café respectivamente*/

document.addEventListener("keydown", function(event){
    if(event.key=="q" || event.key=="w" || event.key=="e"){
        creardiv(event.key)
    }
})

function creardiv(key){
    const nuevodiv = document.createElement("div")
    nuevodiv.className = "tamanosdiv"

    if(key=="q"){
       nuevodiv.style.backgroundColor = "purple"
    }

    if(key=="w"){
        nuevodiv.style.backgroundColor = "gray"
     }
     if(key=="e"){
      nuevodiv.style.backgroundColor = "brown"
     }
     document.body.appendChild(nuevodiv)
}

