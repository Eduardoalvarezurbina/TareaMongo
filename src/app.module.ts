import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VentasModule } from './ventas/ventas.module'; 
import { VentaSchema } from 'src/schemas/venta.schema';
import { ProductoSchema } from './schemas/producto.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tienda-electronica'),
    MongooseModule.forFeature([
      { name: 'Producto', schema: ProductoSchema },
      { name: 'Venta', schema: VentaSchema },
    ]),
    VentasModule, // Agrega el módulo VentasModule aquí
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

