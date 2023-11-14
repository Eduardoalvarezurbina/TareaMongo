import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { VentaDocument } from '../schemas/venta.schema';

@Injectable()
export class VentasService {
  constructor(@InjectModel('Venta') private ventaModel: Model<VentaDocument>) {}

  async listaVentas(): Promise<any> {
    return this.ventaModel.find().exec();
  }

  async registrarVenta(ventaDto: any): Promise<any> {
    const nuevaVenta = new this.ventaModel(ventaDto);
    return nuevaVenta.save();
  }

  async generarReporteVentasPorCategoria(): Promise<any> {
    const mesActual = new Date().getMonth() + 1;

    return this.ventaModel.aggregate([
      {
        $match: {
          fechaVenta: { $gte: new Date(new Date().getFullYear(), mesActual - 1, 1) },
        },
      },
      {
        $lookup: {
          from: 'productos', // Ajusta esto según el nombre de tu colección de productos
          localField: 'producto',
          foreignField: '_id',
          as: 'productoInfo',
        },
      },
      {
        $unwind: '$productoInfo',
      },
      {
        $group: {
          _id: '$productoInfo.categoria',
          totalIngresos: { $sum: '$precioTotal' },
        },
      },
    ]).exec();
  }
}
