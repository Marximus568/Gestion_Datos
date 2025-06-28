const inventory = {
  1: { producto: "camisa", precio: 1000 },
  2: { producto: "chaqueta", precio: 5000 },
  3: { producto: "sueter", precio: 6000 },
};

let submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  let id = document.getElementById("id").value.trim();
  let product = document.getElementById("product").value.trim();
  let price = document.getElementById("price").value.trim();
  let operation = document.getElementById("operation").value;

  // Validación general de ID
  if (!id || id < 0) {
    alert("ID inválido.");
    return;
  }

  // Ejecución del programa
  if (operation === "add") {
    if (!product || isNaN(price) || price < 0) {
      alert("Datos inválidos para agregar.");
      return;
    }
    if (inventory[id]) {
      alert("ID ya existe.");
    } else {
      inventory[id] = { producto: product, precio: Number(price) };
      alert("Producto agregado.");
    }

  } else if (operation === "read") {
    if (inventory[id]) {
      alert(`ID: ${id}, Producto: ${inventory[id].producto}, Precio: ${inventory[id].precio}`);
    } else {
      alert("Producto no encontrado.");
    }

  } else if (operation === "update") {
    if (!product || isNaN(price) || price < 0) {
      alert("Datos inválidos para actualizar.");
      return;
    }
    if (inventory[id]) {
      inventory[id] = { producto: product, precio: Number(price) };
      alert("Producto actualizado.");
    } else {
      alert("Producto no encontrado.");
    }

  } else if (operation === "delete") {
    if (inventory[id]) {
      delete inventory[id];
      alert("Producto eliminado.");
    } else {
      alert("Producto no encontrado.");
    }

  } else {
    alert("Operación no reconocida.");
    return;
  }

  mostrarInventario();
  mostrarInventarioset();
  mostrarInventariomap();

  console.log("Inventario actualizado:", inventory);
});

// Funciones para mostrar diferentes inventarios
function mostrarInventario() {
  const display = document.getElementById("inventoryDisplay");
  display.innerHTML = ""; // Limpiar contenido anterior

  if (Object.keys(inventory).length === 0) {
    display.innerHTML = "<p>No hay productos en el inventario.</p>";
    return;
  }

  for (const id in inventory) {
    const item = inventory[id];
    display.innerHTML += `<p><strong>ID:</strong> ${id} | <strong>Producto:</strong> ${item.producto} | <strong>Precio:</strong> $${item.precio}</p>`;
  }
}

function mostrarInventarioset() {
  const display = document.getElementById("inventorysets");
  display.innerHTML = ""; // Limpiar contenido anterior

  if (Object.keys(inventory).length === 0) {
    display.innerHTML = "<p>No hay productos en el inventario.</p>";
    return;
  }

  const setProductos = new Set(
    Object.values(inventory).map((item) => item.producto)
  );

  display.innerHTML += "<p><strong>Productos únicos:</strong></p>";
  for (const producto of setProductos) {
    display.innerHTML += `<p>${producto}</p>`;
  }
}

function mostrarInventariomap() {
  const display = document.getElementById("inventorymaps");
  display.innerHTML = ""; // Limpiar contenido anterior

  // Mapa independiente de categorías y productos
  const mapProductos = new Map([
    ["Electrónico", "Laptop"],
    ["Muebles", "Sofá"],
    ["Electrodoméstico", "Estufa"]
  ]);

  if (mapProductos.size === 0) {
    display.innerHTML = "<p>No hay categorías en el inventario.</p>";
    return;
  }

  display.innerHTML += "<p><strong>Categorías y productos:</strong></p>";
  mapProductos.forEach((producto, categoria) => {
    display.innerHTML += `<p><strong>Categoría:</strong> ${categoria} | <strong>Producto:</strong> ${producto}</p>`;
  });
}