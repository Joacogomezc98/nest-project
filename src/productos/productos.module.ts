import { Module } from '@nestjs/common';
import { productosController } from './productos.controller';
import { ProductosService } from './productos.service';

@Module({
  controllers: [productosController],
  providers: [ProductosService]
})
export class ProductosModule {}
