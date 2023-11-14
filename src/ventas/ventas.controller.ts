import { Controller, Get, Post, Body } from '@nestjs/common';
import { VentasService } from './ventas.service';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Get('/lista')
  async listaVentas(): Promise<any> {
    return this.ventasService.listaVentas();
  }

  @Post('/registrar')
  async registrarVenta(@Body() ventaDto: any) {
    return this.ventasService.registrarVenta(ventaDto);
  }

  @Get('/reporte')
  async generarReporteVentasPorCategoria(): Promise<any> {
    const reporte = await this.ventasService.generarReporteVentasPorCategoria();
    return { reporte };
  }
}
