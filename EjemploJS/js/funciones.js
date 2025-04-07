function sumar(){
    //rescatar num1 y num2 desde el formulario
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var resultado = parseInt(n1) + parseInt(n2);
    //mostrar el resultado en un alert
    alert("El resultado de la suma es: "+ resultado);
}