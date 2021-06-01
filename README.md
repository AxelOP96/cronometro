# Cronometro:

Cuenta regresiva utilizando JavaScript, el objeto date nos devuelve un objeto que utilizo para copiar el mes, el dia, la hora, el año, la zona horaria y el año para determinar una fecha exacta. 
Si restamos fechas obtenemos milisegundos, cada 1000 milisegundos es un segundo. Hay que convertir a segundos, minutos, horas y dias y actualizar a cada segundo.
Ejemplo:
const getRemainTime = deadline => {
    let now= new Date(),
    
    Lo dividimos entre 1000 y le sumamos 1000 para que al fijar el timer demore un segundo para actualizar por primera vez

    remainTime = (new Date(deadline) - now + 1000) /1000;

    No es un numero entero va a haber decimales, por eso necesito Math.floor()
    si remainSeconds es menor que 10 va a tener un solo digito, al concatenar el cero con string y poner el metodo slice con el -2 saca un fragmento del string y cuando tiene un numero negativo busca desde atras por lo tanto si me diera un numero de dos digitos me quedo con los dos digitos e ignora el cero inicial. Pero si el resultado inicial tuviera un solo digito se le sumaria el cero por lo que se concatenaria y pasaria a ser un numero de dos digitos

remainSeconds = ( '0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ( '0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ( '0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

Para actualizar a cada segundo creamos una funcion con parametros(tiempo limite, un elemento y opcionalmente un mensaje al final de la cuenta regresiva), 

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const tiemrUpdate =setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

para que deje de contar creamos una funcion que utiliza el parametro tiempo total menor o igual que 1 porque si fuera cero seria muy dificil que llegue a ser cero por la cantidad de decimales

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000)
};