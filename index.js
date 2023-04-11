
let menu = `Bienvenido al sistema seleccione la clase para calcular el plan anual:
1- Pileta libre: $3000 x mes
2- Clases 1 vez x semana: $4000 x mes
3- Clases 2 veces x semana: $5000 x mes
4- Clases 3 veces x semana: $6000 x mes
5- Salir`
let plan = 0
let opcion = 0
do{
    opcion = parseInt(prompt(menu))

    switch(opcion){
        case 1:
            plan = 3000*12
            alert('El plan anual es de $' + plan)
            break
        case 2:
            plan = 4000*12
            alert('El plan anual es de $' + plan)
            break
        case 3:
            plan = 5000*12
            alert('El plan anual es de $' + plan)
            break
        case 5:
            break
        default:
            alert('Opcion incorrecta, vuelva a seleccionar')
    }
}while(opcion!=5)