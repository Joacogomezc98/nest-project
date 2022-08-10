import { Productos } from "./productos.interface";

export interface Carritos {

    readonly id: String;
    readonly timestamp: Date;
    readonly products: Array<Productos>;

}
