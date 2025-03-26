const form = document.getElementById ('formulario');
addEventListener("submit", function(e){
    e.preventDefault();
    let numeroA = parseFloat(this.document.getElementById("numero-a").value);
    let numeroB = parseFloat(document.getElementById("numero-b").value);
    
    if(numeroB > numeroA ){
    alert("o formulario e valido");
    } else{
        alert("o fuemulario nao e valido");
    }
})
console.log(form);