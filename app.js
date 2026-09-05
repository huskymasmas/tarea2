const productos = [
    {
        id: 1,
        nombre: "Laptop Lenovo IdeaPad",
        categoria: "Computadoras",
        precio: 4500,
        disponible: true
    },
    {
        id: 2,
        nombre: "Laptop HP Pavilion",
        categoria: "Computadoras",
        precio: 5200,
        disponible: true
    },
    {
        id: 3,
        nombre: "Mouse Logitech",
        categoria: "Periféricos",
        precio: 250,
        disponible: true
    },
    {
        id: 4,
        nombre: "Teclado Mecánico Redragon",
        categoria: "Periféricos",
        precio: 450,
        disponible: false
    },
    {
        id: 5,
        nombre: "Audífonos Xiaomi",
        categoria: "Accesorios",
        precio: 350,
        disponible: true
    },
    {
        id: 6,
        nombre: "Monitor Samsung 24 pulgadas",
        categoria: "Periféricos",
        precio: 1800,
        disponible: false
    },
    {
        id: 7,
        nombre: "Memoria RAM 16GB",
        categoria: "Componentes",
        precio: 650,
        disponible: true
    },
    {
        id: 8,
        nombre: "SSD Kingston 1TB",
        categoria: "Componentes",
        precio: 900,
        disponible: true
    }
];

const catalogo = document.querySelector("#catalogo");
const mensaje = document.querySelector("#mensaje");
const buscar = document.querySelector("#buscar");
const categoria = document.querySelector("#categoria");
const btnTodos = document.querySelector("#btnTodos");
const btnDisponibles = document.querySelector("#btnDisponibles");


const mostrarProductos = (listaProductos) => {

    catalogo.innerHTML = "";

    if (listaProductos.length === 0) {
        mensaje.textContent = "No se encontraron productos";
        return;
    }

    mensaje.textContent = "";

    const tarjetas = listaProductos.map((producto) => {

        const {
            nombre,
            categoria,
            precio,
            disponible
        } = producto;

        const estado = disponible
            ? "Disponible"
            : "Agotado";

        const claseEstado = disponible
            ? "disponible"
            : "agotado";

        return `
            <article class="producto">
                <h2>${nombre}</h2>
                <p><strong>Categoría:</strong> ${categoria}</p>
                <p class="precio">Q${precio.toFixed(2)}</p>
                <p class="${claseEstado}">
                    ${estado}
                </p>
            </article>
        `;
    });

    catalogo.innerHTML = tarjetas.join("");
};


const buscarProducto = () => {

    const texto = buscar.value.toLowerCase().trim();

    const productosEncontrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(texto)
    );

    const categoriaSeleccionada = categoria.value;

    const resultado = productosEncontrados.filter((producto) =>
        categoriaSeleccionada === "Todas" ||
        producto.categoria === categoriaSeleccionada
    );

    mostrarProductos(resultado);
};


const filtrarDisponibles = () => {

    const disponibles = productos.filter((producto) =>
        producto.disponible
    );

    mostrarProductos(disponibles);
};


const mostrarTodos = () => {
    mostrarProductos(productos);
};


const consultarProducto = (nombreProducto) => {

    const producto = productos.find((producto) =>
        producto.nombre.toLowerCase() === nombreProducto.toLowerCase()
    );

    return producto;
};


const mostrarDisponibilidad = () => {

    const disponibles = productos.filter((producto) =>
        producto.disponible
    );

    disponibles.forEach((producto) => {
        console.log(`${producto.nombre} está disponible`);
    });
};


buscar.addEventListener("input", buscarProducto);

categoria.addEventListener("change", buscarProducto);

btnTodos.addEventListener("click", mostrarTodos);

btnDisponibles.addEventListener("click", filtrarDisponibles);


mostrarProductos(productos);

mostrarDisponibilidad();

console.log(consultarProducto("Mouse Logitech"));
