/** carrito */
const listaCarrito = document.querySelector("#lista-carrito");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaPizzas = document.querySelector("#lista-pizzas");
let carritoPizza = [];


cargaDeAlimentosEventListener();
function cargaDeAlimentosEventListener() {
  listaPizzas.addEventListener('click', agregarPizza)
  listaCarrito.addEventListener('click', eliminarPizza)
  vaciarCarrito.addEventListener('click', vaciarPizza)
}

function agregarPizza(e) {
  e.preventDefault();

  if (e.target.classList.contains('agregar-carrito'))
    /*const pizzaSeleccionada = e.target.parentElement.parentElement;
    console.log(e.target)*/
    leerDatosComida(pizzaSeleccionada);
}

function leerDatosComida(pizza) {
  console.log(pizza)

  const infoCursos = {
    imagen: pizza.querySelector('img').src,
    titulo: pizza.querySelector('h4').textContent,
    precio: pizza.querySelector('.precio span').textContent,
    id: pizza.querySelector('a').getAtribute('data-id'),
    cantidad: 1
  }
  console.log(infoPizza)
}



if (pizzaCarrito.some(pizza => pizza.id === infoPizza.id)) {
  const pizzas = pizzaCarrito.map(pizza => {
    if (disponible.id === pizza.id) {
      pizza.cantidad++;
      return pizza
    } else {
      return pizza
    }
  })

  pizzaCarrito = [...pizzaCarrito, infoPizza]
} else {

  console.log(pizzaCarrito)
  carritoHTML();
}

function eliminarPizza(e) {

  if (e.target.classList.contains('borrar-pizza')) {
    const pizzaId = e.target.getAtribute('pizza')

    pizzaCarrito = pizzaCarrito.filter(pizza => pizza.id !== pizzaId)
    console.log(pizzaCarrito)
  }
}

/**REVISION forEach */
pizzasCarrito.forEach(curso => {
  const row = document.createElement('tr');
  row.innerHTML = `
    < td > <img src ="${pizza.imagen}" width="100" </td >
    < td >
    ${pizza.titulo}
    ${pizza.precio}
    </td >
`;
  pizzasCarrito.appendChild(row);
})


/*function limpiarHTML() {

  console.log(pizza)
  const row = document.createElement('tr')
  row.innerHTML = `
  <td>
  <img src ="${pizza.imagen}" width="100"
  <td>${pizza.precio}<td>`
}*/

/*function leerDatosPizza(pizza) {


  const infoPizza = {
    imagen: pizza.querySelector('img').src
  }

}*/
/*
function cargaEventListener() {
  listaCursos.addEventListener('click', agregarCurso);
  carrito.addEventListener('click', eliminarPizza);
  vaciarCarrito.addEventListener('click', () => {
    pizzaCarrito = []
  })
}*/

vaciarCarrito.addEventListener('click', () => {
  pizzaCarrito = [];


  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }

})
/**------------------------------------------------ */
/**Buscar */

