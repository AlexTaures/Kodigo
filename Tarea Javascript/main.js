

//Tarea
//1.	Realiza un programa que a partir de los valores constantes, ancho=4 y alto=7, calcule el área de un rectángulo.
function arearect(){
    const ancho=4;
    const alto=7;
    let area=ancho*alto
    let rel=50 //modifica el tamaño relativo del rectangulo

    let e=document.getElementById('rectangulo');
        e.style.width=ancho*rel+'px';
        e.style.height=alto*rel+'px';
    
    let h=document.getElementById('ancho');
        h.textContent=ancho;
        h.style.width=ancho*rel+'px';
        
    
    let i=document.getElementById('alto');
        i.textContent=alto;
        i.style.height=alto*rel+'px';
        
    
    let k=document.getElementById('resultado1');
        k.textContent= 'El resultado es: '+area+' unidades cuadradas.'
    

}



/*2.	Hacer un conversor de euros a dólares. Tendremos una constante llamada euros en la que el valor estará inicializado con valor 7. 
Debemos calcular ese valor en dólares. Supondremos que un euro son dos dólares.*/
function conversor(){
    const tasa=2;
    const euros=7;

    let i=document.getElementById('resultado2');
        i.textContent='Con una tasa de conversion de '+tasa+' (€/$), €'+euros+' son $'+tasa*euros+'.';
}


//3.	El IVA para ciertos artículos es del 21%. Realiza un programa que a partir de una constante precio inicializada con valor 100, calcule el precio con IVA.
function iva(){
    const iva=21;
    const precio=100;

    let i=document.getElementById('resultado3');
        i.textContent='Con un tasa IVA del '+iva+'%, el precio total del articulo es de: '+precio*(1+iva/100)+'.';  

}


/*4.	Asigna 2 variables numéricas y realiza una calculadora la cual con esas dos variables, realice las operaciones de:
Suma, resta, multiplicación y división.
El resultado será mostrado por consola de la siguiente manera:
--------------------------------------------
Suma resultado: {Respuesta}
--------------------------------------------
Resta resultado: {Respuesta}
--------------------------------------------
Multiplicación resultado: {Respuesta}
--------------------------------------------
División resultado: {Respuesta}
--------------------------------------------*/
function operaciones(){
   let n1=document.getElementById('numero1').value;
   let n2=document.getElementById('numero2').value;
   const lineas='--------------------------------------------'

   if(n1==""||n2==""){
    alert("Existen campos que estan vacíos o tienen datos invalidos");
    return;
   }

   sum=n1/1+n2/1;
   res=n1-n2;
   prod=n1*n2;
   div=n1/n2;
    console.clear();
    console.log(lineas+'\nSuma resultado: '+sum);
    console.log(lineas+'\nResta resultado: '+res);
    console.log(lineas+'\nMultiplicacion resultado: '+prod);
    console.log(lineas+'\nDivision resultado: '+div.toFixed(4));
    console.log(lineas)
    alert('El resultado se muestra en consola')

}


//5.	Calcula el área de un círculo y muestra el resultado.
function areacir(){
    let r=document.getElementById('radio').value

    if(r==""){
        alert('No se ha definido el radio de manera correcta');
        return;
    }
    let area=Math.PI*(r**2);
    area=area.toFixed(2);

    document.getElementById('Dradio').textContent='Radio = '+r
    document.getElementById('resultado5').textContent='El area del cirulo es de '+area+' unidades cuadradas.'
}


/*6.	Dadas las variables, nombre, apellido, edad y curso. 
Imprime en formato:
Mi nombre es {nombre completo}.
Tengo {años} años.
Me encuentro en el curso de {curso}.*/

function imprimir(){
    let nom=document.getElementById('nombre').value;
    let ape=document.getElementById('apellido').value;
    let age=document.getElementById('edad').value;
    let cur=document.getElementById('curso').value;

    if(nom==""||ape==""||age==""||cur==""){
        alert('Existen campos que se encuentran vacíos o contienen datos inválidos');
        return;
    }

    if(age<=0){
        alert('Escriba una edad valida');
        return;
    }

    document.getElementById('resultado6a').textContent='Mi nombre es '+nom+' '+ape+'.';
    document.getElementById('resultado6b').textContent='Tengo '+age+' años.'
    document.getElementById('resultado6c').textContent='Me encuentro en el curso de '+cur+'.'
}

