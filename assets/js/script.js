/* Modifica el código anterior para poder pasarle un color como argumento a la
funcin pintar. El color debe ser verde (green) por defecto, al hacer clic en el
párrafo se debe pasar amarillo como color */

function pintar(ele, color = "green"){
    ele.style.backgroundColor = color
    }

document.addEventListener("DOMContentLoaded", function(){
    const ele = document.getElementById("ele1")
    pintar(ele, "green")
    ele.addEventListener("click", function (){pintar(ele, "yellow")
}
)
}
)

