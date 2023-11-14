import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductoDocument } from '../schemas/producto.schema';

@Injectable()
export class ProductosService {
  constructor(@InjectModel('Producto') private productoModel: Model<ProductoDocument>) {}

  async listaProductos(): Promise<any> {
    return this.productoModel.find().exec();
  }

  async registrarProducto(productoDto: any): Promise<any> {
    const nuevoProducto = new this.productoModel(productoDto);
    return nuevoProducto.save();
  }
}
