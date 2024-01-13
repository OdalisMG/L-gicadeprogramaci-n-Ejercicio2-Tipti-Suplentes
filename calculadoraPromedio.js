function validarNota(nota) {
    return nota >= 0 && nota <= 10;
   }
   
   function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
   }
   
   function evaluarPromedio(promedio) {
    if (promedio >= 7) {
       return '¡felicidades! Has aprobado con un promedio de ' + promedio + '.';
    } else {
       return 'gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ' + promedio + '.';
    }
   }
   
   var nombreAlumno = prompt('Ingrese el nombre del alumno:');
   var materia = prompt('Ingrese la materia:');
   var nota1 = parseFloat(prompt('Ingrese la primera nota (0-10):'));
   var nota2 = parseFloat(prompt('Ingrese la segunda nota (0-10):'));
   var nota3 = parseFloat(prompt('Ingrese la tercera nota (0-10):'));
   
   if (!validarNota(nota1) || !validarNota(nota2) || !validarNota(nota3)) {
    alert('Error: una o más de las notas ingresadas no se encuentran dentro del rango válido (0-10).');
   } else {

    var promedio = calcularPromedio(nota1, nota2, nota3);
   
    var resultado = evaluarPromedio(promedio);
   
       }    alert('Nombre del alumno: ' + nombreAlumno + ', Materia: ' + materia + '. ' + resultado);