import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { Carritos } from 'src/interfaces/carritos.interface';
import { CarritosService } from './carritos.service';
import { CreateCarritoDto } from 'src/dto/create-carritos-dto';

@Controller('carritos')
export class CarritosController {
    constructor(private readonly carritosService: CarritosService) { }
    @Post()
    async create(@Body() createCarritoDto: CreateCarritoDto) {
        this.carritosService.create(createCarritoDto)
    }
    @Get()
    async findAll(): Promise<Carritos[]> {
        return this.carritosService.findAll()
    }

    @Get()
    async getById(@Body() id: String): Promise<Carritos[]> {
        return this.carritosService.getById(id)
    }

    @Delete()
    async deleteById(@Body() id: String, newCart: Carritos) {
        this.carritosService.deleteById(id)
    }

    @Put()
    async updateCarrito(@Body() id: String, newCart: Carritos) {
        this.carritosService.updateCarrito(id, newCart)
    }

}
