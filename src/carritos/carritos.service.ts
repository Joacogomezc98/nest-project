import { Injectable } from '@nestjs/common';
import { Carritos } from 'src/interfaces/carritos.interface';

@Injectable()
export class CarritosService {
    private readonly carritos: Carritos[] = [];

    create(carrito: Carritos) {
        this.carritos.push(carrito)
    }

    findAll(): Carritos[] {
        return this.carritos;
    }

    getById(id: String) {
        let carrito: any = this.carritos.find((data) => data.id === id)
        return carrito
    }

    deleteById(id: String){
        let index = this.carritos.map((data) => data.id).indexOf(id)
        this.carritos.splice(index, 1)
    
        return this.carritos
      }

    updateCarrito(id: String, newCart: Carritos){
        let index = this.carritos.map((data) => data.id).indexOf(id)
        this.carritos.splice(index, 1)

        this.carritos.push(newCart)

        return this.carritos
    }
}
