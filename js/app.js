let a = prompt("ingrese un numero")

for (; a <= 50; a++) {
    //quiero saltear los numeros del 17 al 39
 
   
    if(a >=17 && a <=39) {
        console.log ("no me gustan estos numeros")
    continue; 
}
    
    console.log(a);
}

