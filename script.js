



const valorTicket = 200;

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;



const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoriaSelect');
const botonCalcular = document.getElementById('resumen');
const botonBorrar = document.getElementById('borrar');
const p = document.getElementById('totalPagar');

//Funcion Calcula el total en base a la categoria
function total() {
  let totalvalor=(cantidad.value) * valorTicket;
  if (categoria.value == 0) {
    totalvalor = totalvalor - (totalvalor * descuentoEstudiante);
   }
  else if (categoria.value == 1) {
    totalvalor = totalvalor - (totalvalor * descuentoTrainee); 
  }
  else if (categoria.value == 2) {
    totalvalor = totalvalor - (totalvalor * descuentoJunior); 
  } else{
        totalvalor = totalvalor 
      }
  p.innerHTML = `Total a pagar: ${totalvalor}`;
}

//funcion al boton
botonCalcular.addEventListener("click", total);

// boton reset
botonBorrar.addEventListener('click', ()=>{
 
 formulario.reset()

});




//funcion para validar formulario

(function () {
    'use strict'
  
 // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else{
            event.preventDefault ()
            const numero = document.querySelector('totalValor').value;
            const total = document.querySelector('#totalCompra');
            total.innerHTML = numero;
            }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()