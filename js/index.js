let contraseña;

do{
    contraseña = prompt("ingresa tu contraseña")
}while(contraseña !== 'joakopapaz')
    alert("correcto")



    let edad = parseInt(prompt("ingresa tu edad nene"))

    if(edad >= 18){
        console.log("el pive puede entrar")
    }
    else{
        console.log("el pive no entra")
    }



    let nombre1 = prompt("ingresa tu nombre")
let apellido = prompt("ingresa tu apellido")
let edad2 = parseFloat(prompt("ingresa tu edad"))


function datos(nombre1 = "juan", apellido = "vazquez" , edad2 = 20){
    console.log("el nombre es " , nombre1 + apellido + edad2)
}

datos("el nombre es " , nombre1 , apellido + "y su edad es " + edad2)