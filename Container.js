class Container {
  constructor(productos = []) {
    this.productos = productos;
  }

  saveProduct(product) {
    product.id =
      this.productos.length > 0
        ? this.productos[this.productos.length - 1].id + 1
        : 1;
    this.productos.push(product);
    console.log("Product id", product.id);
    return product.id;
  }

  getAll() {
    return this.productos;
  }

  getById(id) {
    return this.productos.find((product) => product.id == id);
  }

  update(productid, data) {
    const current = this.getById(productid);
    const currentIndex = this.productos.indexOf(current);
    this.productos[currentIndex] = { ...current, ...data };
    return this.productos[currentIndex];
  }

  deleteAll() {
    return (this.productos = []);
  }

  deleteById(id) {
    this.productos = this.productos.filter((product) => product.id != id);
    return this.productos;
  }
}

module.exports = Container;
