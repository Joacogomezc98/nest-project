import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { Productos } from 'src/interfaces/productos.interface';
import { ProductosService } from './productos.service';
import { CreateProductsDto } from 'src/dto/create-productos.dto';

@Controller('productos')
export class productosController {
    constructor(private readonly productosService: ProductosService) { }
    @Post()
    async create(@Body() createProductoDto: CreateProductsDto) {
        this.productosService.create(createProductoDto)
    }
    @Get()
    async findAll(): Promise<Productos[]> {
        return this.productosService.findAll()
    }

    @Get()
    async getById(@Body() id: String): Promise<Productos[]> {
        return this.productosService.getById(id)
    }

    @Delete()
    async deleteById(@Body() id: String, newCart: Productos) {
        this.productosService.deleteById(id)
    }

    @Put()
    async updateCarrito(@Body() id: String, newCart: Productos) {
        this.productosService.updateProduct(id, newCart)
    }

}
