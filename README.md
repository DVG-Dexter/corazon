# corazon
mostrar corazon por lineas con tiempo definido
instruciones:

/* 
Funciones a elaborar:

* animateByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* animateByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerdas que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

*/

/*
 Ejecutar el comando <' node app.js '> para ver el resultado del codigo

*/

 /*EXPLICACION:


 IMPRIMIR CORAZÓN CARÁCTER POR CARÁCTER EN LA CONSOLA (BY DIEGO VEGA)


Este código de JavaScript tiene como objetivo imprimir un corazón ASCII en la consola, pero lo hace con un retraso (delay) entre la impresión de cada carácter, para darle un efecto de aparición gradual. El corazón a imprimir es un arreglo de cadenas, donde cada cadena es una línea que representa una parte del corazón.

1.- Creamos la función principal con dos argumentos:

- array: un arreglo de cadenas que representan el corazón en formato ASCII.
- ms: el tiempo en milisegundos entre cada carácter que se imprimirá (el "delay").

2.- Definimos dos variables y las inicializamos a cero:
 	- i recorre la línea actual del array que está siendo impresa.
 	- j recorre la posición del carácter actual dentro de la línea que está siendo impresa.

3.- Creamos la función para que nos imprima lo que queremos, imprimir los caracteres del corazón con el retraso entre cada uno de ellos el tiempo en ms que queramos.

4.- explicación de la función a crear:

- El primer if (i < array.length) asegura que todavía quedan líneas por imprimir.

- El segundo if (j < array[i].length) verifica si la línea actual (array[i]) aún tiene caracteres sin imprimir.

- process.stdout.write(array[i][j]) imprime el carácter actual en la consola sin agregar un salto de línea (lo que hace console.log() por defecto).

- j++ avanza a la siguiente posición del carácter en la misma línea.
- setTimeout(imprimir, ms) llama de nuevo a la función imprimir después de un retraso de ms milisegundos, para seguir imprimiendo el siguiente carácter.

5.- explicación del cambio de línea:

- Si todos los caracteres de la línea actual ya se imprimieron, se imprime un salto de línea con console.log() para empezar una nueva línea.
- Se incrementa i para moverse a la siguiente línea del corazón.
- j se reinicia a 0 para comenzar a imprimir la primera posición de la nueva línea.
- setTimeout(imprimir, ms) llama de nuevo a la función imprimir con el mismo retraso.

6.- Imprimimos:

- Esta línea inicializa la secuencia de impresión. Llama a la función imprimir por primera vez, y a partir de ahí, la función se auto-llama repetidamente con setTimeout hasta que todo el corazón esté impreso.

7.- Llamamos a la función:

- ya solo queda llamar a la función con los argumentos dados pero poniendo el tiempo de delay en ms ente los caracteres.

*/

