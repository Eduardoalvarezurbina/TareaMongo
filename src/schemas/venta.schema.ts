import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Producto, ProductoSchema } from 'src/schemas/producto.schema';

export type VentaDocument = Venta & Document;

@Schema()
export class Venta {
  @Prop({ type: Types.ObjectId, ref: 'Producto', required: true })
  producto: Producto;

  @Prop({ required: true })
  cantidad: number;

  @Prop({ required: true })
  precioTotal: number;

  @Prop({ required: true })
  fechaVenta: Date;

  @Prop({ required: true })
  vendedor: string;
}

export const VentaSchema = SchemaFactory.createForClass(Venta);