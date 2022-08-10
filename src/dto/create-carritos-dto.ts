import { Productos } from "src/interfaces/productos.interface";

export class CreateCarritoDto {
    readonly id: String;
    readonly timestamp: Date;
    readonly products: Array<Productos>;
}
