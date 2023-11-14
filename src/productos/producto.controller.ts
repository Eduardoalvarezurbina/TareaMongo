// productos.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post('/registrar')
  async registrarProducto(@Body() productoDto: any) {
    return this.productosService.registrarProducto(productoDto);
  }
}
