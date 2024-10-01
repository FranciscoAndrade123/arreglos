
let arregloNumero =[];
let iteracion
let resultadoPrint=""

arregloNumero = [1,2,3,4,5,6,7,8,9,10];

for(iteracion=0  ;iteracion<=arregloNumero.length;iteracion++){
    resultadoPrint += '<li class="list-group-item">'+arregloNumero[iteracion]+'</li>'
}

document.getElementById('lista-numero').innerHTML=resultadoPrint;