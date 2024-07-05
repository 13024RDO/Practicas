// Array para almacenar los productos en el carrito
let carrito = [];

// Funcion para agregar un producto al carrito
function agregarAlCarrito(nombre,precio){
  let producto = {
    nombre:nombre,
    precio:precio
  };
  carrito.push(producto);
  mostrarCarrito();
}

//Funciom para mostrar los productos en el carrito
function mostrarCarrito(){
  const carritoElement = document.getElementById('carrito');
  const totalElement = document.getElementById('total');

  //Limpiar carrito antes de mostrar nuevamente
  carritoElement.innerHTML = '';

  //Recorrer cada producto en el carrito
  carrito.forEach((producto,index)=>{
    const item = document.createElement('li');
    item.classList.add('cart-item');
    item.innerText = `${producto.nombre} - $${producto.precio}`;

    //Boton para eliminar productos en el carrito 
    const botonEliminar = document.createElement('button');
    botonEliminar.innerText = 'Eliminar';
    botonEliminar.addEventListener('click', ()=> eliminarDelCarrito(index));

    item.appendChild(botonEliminar);
    carritoElement.appendChild(item);
  });

  //Calcular y mostrar el total del carrito 
  let total = carrito.reduce((total,producto) => total + producto.precio,0);
  totalElement.innerText = total.toFixed(2);
}

//Funcion para eliminar un producto del carrito 
function eliminarDelCarrito(index){
  carrito.splice(index, 1);
  mostrarCarrito();

}