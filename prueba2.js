alert("escriba tres numeros");
//solicitar tres números y guardarlos en sus respectivas variables
let n1 = prompt("ingrese el primer número");
let n2 = prompt("ingrese el segundo numero");
let n3 = prompt("ingrese el tercer numero");
let confi = confirm("seguro?");
//determinar el número mayor, el número menor e imprimir en la consola. 
if (n1 > n2) {
    t = n1;
}else{
    t = n2;
}

if (t > n3) {
    mayor = t;
}else{
    mayor = n3;
}

document.write("El mayor es "+mayor);
if (n1 < n2) {
    t = n1;
}else{
    t = n2;
}

if (t < n3) {
    menor = t;
}else{
    menor = n3;
}
document.write("El menor es "+menor);