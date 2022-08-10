import { Injectable } from '@nestjs/common';
import { Productos } from 'src/interfaces/productos.interface';

@Injectable()
export class ProductosService {

    private readonly productos: Productos[] = [];
  create(producto: Productos) {
    this.productos.push(producto);
  }

  findAll(): Productos[] {
    return this.productos;
  }

  getById(id: String){
   let product: any =  this.productos.find((data) => data.id === id)
    return product;
  }

  deleteById(id: String){
    let index = this.productos.map((data) => data.id).indexOf(id)
    this.productos.splice(index, 1)

    return this.productos
  }

  updateProduct(id: String, newProduct: Productos) {

    let index = this.productos.map((data) => data.id).indexOf(id)
    this.productos.splice(index, 1)
    
    this.productos.push(newProduct)

    return this.productos
  }









}
