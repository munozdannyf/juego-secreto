
let numeroUsuario=0;
let Contador=0;
let numeroMaximoUsuario =100;//CAMBIAR RANGO A ADIVINAR
let numeroIncognito = Math.floor(Math.random()*numeroMaximoUsuario)+1;
let CantidadIntentos=3;

console.log(numeroIncognito);
while(numeroUsuario!= numeroIncognito) {
  alert(`TIENES ${CantidadIntentos-Contador} ${CantidadIntentos==1?'INTENTO':'INTENTOS'}.....JUGUEMOS!`);
    numeroUsuario = parseInt(prompt(`Ingresa un Numero entre 1 y ${numeroMaximoUsuario} para ver si lo adivinas`)); //PEDIMOS EL NUMERO
    console.log(`Numero Ingresado ${numeroUsuario}`);
    console.log(typeof(numeroUsuario));
    console.log('Resultado de la comparación:', numeroUsuario == numeroIncognito);/*EJERCICIO PLANTEADO CURSO 1, FASE 2, CAP 8
    arroja el resultado de la comparacion TRUE o FALSE segun sea este.
    */ 
    if (numeroUsuario == numeroIncognito) {//CONDICION
      Contador++;
        alert(`ADIVINASTE! EL NUMERO VERDADERAMENTE ES: ${numeroIncognito} \nLO HICISTE EN ${Contador} ${Contador==1 ? 'INTENTO':'INTENTOS'} ${Contador==1 ? '\n\n...................A CASO ERES MAGO?!!.............':'\nGRACIAS POR JUGAR'} `);
        } 
    else {
      /*EJERCICIO PLANTEADO CURSO 1, FASE 2, CAP 9 PRACTICAMENTE LA OPERACION ANTERIOS PERO UTILIZANDO Template trings como lo sugiere el punto 4*/
      if (numeroUsuario > numeroIncognito){
        Contador++;
            alert(`LO SIENTO MUCHO! EL NUMERO ES MENOR \nLLEVAS ${Contador} ${Contador==1 ? 'INTENTO':'INTENTOS'}`);
                       }   
          else{
            Contador++;
            alert(`LO SIENTO MUCHO! EL NUMERO ES MAYOR \nLLEVAS ${Contador} ${Contador==1 ? 'INTENTO':'INTENTOS'}`);
              }          
      if (Contador==CantidadIntentos){
            alert(`LO SIENTO MUCHO AGOTASTE EL NUMERO DE OPORTUNIDADES`);
            break;
           }    
        }
    }
    Contador=0;numeroIncognito=0;
  