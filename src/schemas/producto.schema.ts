import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  categoria: string;

  @Prop({ required: true })
  precioUnitario: number;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);