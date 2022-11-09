



const valorTicket = 200;

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//mensaje
const msj =document.getElementById('mensaje');

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
  p.innerHTML = `Total a pagar: $ ${totalvalor}`;
}

//fun descuento que utilizo
function Felicitaciones(){
  if(categoria.value == 0) {
  msj.innerHTML = "<b>¡Felicitaciones!</b> Utilizaste el descuento del 80%  de la categoria estudiante."
  }
  else if(categoria.value == 1) {
    msj.innerHTML = "<b>¡Felicitaciones!</b> Utilizaste el descuento del 50%  de la categoria Trainee."
    }
    else if(categoria.value == 2) {
      msj.innerHTML = "<b>¡Felicitaciones!</b> Utilizaste el descuento del 15%  de la categoria Junior."
      }
   else {
    msj.innerHTML = "<b>¡Upps!</b> No ingresaste ninguna categoria para acceder a los descuentos!"
        }
             
}
//boton ELIMINAR COMPROBANTE
const btneliminarcomp = document.getElementById('btneliminarcomp')

function eliminarcard() {
     cardContainer.innerHTML= "";
}

btneliminarcomp.addEventListener("click",eliminarcard);


//funcion boton
botonCalcular.addEventListener("click", Felicitaciones);


//funcion al boton
botonCalcular.addEventListener("click", total);

// boton reset /////////////////////
botonBorrar.addEventListener('click', ()=>{
  formulario.reset()
  p.innerHTML = "Total a pagar: $"
  msj.innerHTML = "<i>Ingresa tu categoria para aplicar a los mejores <b>descuentos</b>!</i>"
  
});

//nueva func
const botonDescargar = document.getElementById('btndescargar');
const ticket =document.getElementById('ticket');
const datos =document.getElementById('datos');
const nombre =document.getElementById('nombre');
const apellido =document.getElementById('apellido')
const catcard =document.getElementById('cat');
const email =document.getElementById('correo')
const totalcomprobante=document.getElementById('comptotal')


//crea la card comprobante de la compra
function crearComprobante(){ 
 
const cardContainer = document.getElementById("cardContainer");

let nombrecard = document.createElement("h5");
nombrecard.innerHTML = nombre.value + " " + apellido.value;
cardContainer.appendChild(nombrecard);

let emailcard = document.createElement("h6");
emailcard.innerHTML = email.value;
cardContainer.appendChild(emailcard);
///
let categoriacard = document.createElement("h3");
if (categoria.value == 0) {
  categoriacard.innerHTML= "Estudiante";
 } 
else if (categoria.value == 1) {
  categoriacard.innerHTML= "Trainee";
}
else if (categoria.value == 2) {
  categoriacard.innerHTML= "Junior";
} else{
  categoriacard.innerHTML= "sin categoria";
    }
 cardContainer.appendChild(categoriacard);

 let cantidadCard = document.createElement("h4")
 cantidadCard.innerHTML= "Cantidad: " + cantidad.value;
 cardContainer.appendChild(cantidadCard)
 

 let totalCard = document.createElement("h4")
 totalCard.innerHTML =  p.innerHTML
 cardContainer.appendChild(totalCard)

 let descuentoCard = document.createElement("p")
 if (categoria.value == 0) {
  descuentoCard.innerHTML= "Descuento aplicado: <b>80%</b>";
 } 
else if (categoria.value == 1) {
  descuentoCard.innerHTML= "Descuento aplicado: <b>50%</b>";
}
else if (categoria.value == 2) {
  descuentoCard.innerHTML= "Descuento aplicado: <b>15%</b>";
} else{
  descuentoCard.innerHTML= "No se aplico ningun descuento";
    }
 cardContainer.appendChild(descuentoCard);

 }

botonDescargar.addEventListener("click", crearComprobante);





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